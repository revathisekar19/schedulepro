import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {AssetStatus} from "../change-asset-status/change-asset-status.component";
import {MaintenanceHistory} from "../schedule-maintenance/schedule-maintenance.component";
// import {SerialNumber} from "../sinex-serial-number-search/sinex-serial-number-search.component";

@Injectable({
  providedIn: 'root'
})
export class AssetApiService {
  private assetsUrl = '/api/v1/assets';
  private maintenanceUrl = '/api/v1/maintenance';
  private username = 'bsmuser';
  private password = 'test';
  constructor(private http: HttpClient) {
  }

  getAssetStatus():Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa(this.username + ':' + this.password)
    });
    return this.http.get<AssetStatus[]>(this.assetsUrl, {headers});
  }

  getMaintenance():Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa(this.username + ':' + this.password)
    });
    return this.http.get<MaintenanceHistory[]>(this.maintenanceUrl, {headers});
  }

  deleteMaintenance(element : MaintenanceHistory) : Observable<any> {
    console.log('Deleting maintenance with ID:', element.id);
    const url = this.maintenanceUrl+`/${element.id}`;
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa(this.username + ':' + this.password)
    });
    return this.http.delete<MaintenanceHistory[]>(url, {headers});
  }

  scheduleMaintenance(maintenanceDetails: any):Observable<any> {
    const url = this.maintenanceUrl+`/${maintenanceDetails.assetIds}/${maintenanceDetails.startDate}/${maintenanceDetails.endDate}`;

    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa(this.username + ':' + this.password)
    });

    return this.http.post(url, {}, {headers});
  }

  changeAssetStatus(assetId: number, active: boolean): Observable<any> {
    const apiUrl = `/api/v1/set-asset-status/${assetId}`;
    const params = new HttpParams().set('active', active.toString());
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa(this.username + ':' + this.password)
    });
    return this.http.post(apiUrl, null, {params, headers});
  }
getSerialNumber(assetId:string){
    const api = `/api/v1/serial-numbers/${assetId}`;
  const headers = new HttpHeaders({
    'Authorization': 'Basic ' + btoa(this.username + ':' + this.password)
  });
  return this.http.get(api,{headers});
}
}
