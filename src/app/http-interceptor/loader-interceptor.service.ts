import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {LoaderService} from "../loader/loader.service";
import {finalize, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoaderInterceptorService implements HttpInterceptor{

  constructor(public loaderService : LoaderService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //since it is behavior subject we need to call next to update the value
    this.loaderService.isLoading.next(true);
    return next.handle(req).pipe(
      finalize(
        ()=>{
          this.loaderService.isLoading.next(false);
        }
      )
    );
  }
}
