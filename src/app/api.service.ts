import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpParams } from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private basegetUrl = '/internal/assetids';
  private username = 'bsmuser';
  private password = 'test';
  private secretToken = 'aRJSb9s2lr24jYnjQAVj';

  constructor(private http: HttpClient) { }
  getAssetId() {
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa(this.username + ':' + this.password)
    });
    return this.http.get(this.basegetUrl, { headers });
  }
  scheduleMaintenance(maintenanceDetails: any) {
    const baseUrl = `/asset/maintenance/${maintenanceDetails.assetId}/${maintenanceDetails.startDate}/${maintenanceDetails.stopDate}`;

    const headers = new HttpHeaders({
      'secretToken': this.secretToken,
      'Authorization': 'Basic ' + btoa(this.username + ':' + this.password)
    });
    return this.http.post(baseUrl, {}, { headers });
  }


  changeAssetStatus(assetId: number, active: boolean):Observable<any>{
    const apiUrl = `asset/set-asset-status/${assetId}`;
    const params = new HttpParams().set('active', active.toString());
    // const params = { active: active.toString() };
    // const requestBody = { isActive: active };
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa(this.username + ':' + this.password)
    });
    return this.http.post(`${apiUrl}?active=${active}`, {}, { params,headers });
  }
}
