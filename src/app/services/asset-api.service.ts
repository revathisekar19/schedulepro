import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {AssetStatus} from "../change-asset-status/change-asset-status.component";

@Injectable({
  providedIn: 'root'
})
export class AssetApiService {
  private baseUrl = '/api/v1/assets-status';
  private username = 'bsmuser';
  private password = 'test';
  constructor(private http: HttpClient) {
  }

  getAssetStatus() {
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa(this.username + ':' + this.password)
    });
    return this.http.get<AssetStatus[]>(this.baseUrl, {headers});
  }

  scheduleMaintenance(maintenanceDetails: any) {
    const baseUrl = `/api/v1/maintenance/${maintenanceDetails.assetIds}/${maintenanceDetails.startDate}/${maintenanceDetails.endDate}`;

    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa(this.username + ':' + this.password)
    });

    return this.http.post(baseUrl, {}, {headers});
  }

  changeAssetStatus(assetId: number, active: boolean): Observable<any> {
    const apiUrl = `/api/v1/set-asset-status/${assetId}`;
    const params = new HttpParams().set('active', active.toString());
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa(this.username + ':' + this.password)
    });
    return this.http.post(apiUrl, null, {params, headers});
  }
}
