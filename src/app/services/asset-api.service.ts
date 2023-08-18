import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {AssetStatus} from "../change-asset-status/change-asset-status.component";

@Injectable({
  providedIn: 'root'
})
export class AssetApiService {
  private baseUrl = '/api/v1/assetStatus';
  private username = 'bsmuser';
  private password = 'test';
  private secretToken = 'aRJSb9s2lr24jYnjQAVj';

  constructor(private http: HttpClient) {
  }

  getAssetId() {
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa(this.username + ':' + this.password)
    });
    return this.http.get(this.baseUrl, {headers});
  }

  getAllAssetStatus() {
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa(this.username + ':' + this.password)
    });
    return this.http.get<AssetStatus[]>(this.baseUrl, {headers});
  }

  scheduleMaintenance(maintenanceDetails: any) {
    const baseUrl = `/asset/maintenance/${maintenanceDetails.assetId}/${maintenanceDetails.startDate}/${maintenanceDetails.stopDate}`;

    const headers = new HttpHeaders({
      'secretToken': this.secretToken,
      'Authorization': 'Basic ' + btoa(this.username + ':' + this.password)
    });

    return this.http.post(baseUrl, {}, {headers});
  }


  changeAssetStatus(assetId: number, active: boolean): Observable<any> {
    const apiUrl = `asset/set-asset-status/${assetId}`;
    const params = new HttpParams().set('active', active.toString());
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa(this.username + ':' + this.password)
    });
    return this.http.post(apiUrl, null, {params, headers});
  }
}
