import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {AssetStatus} from "../change-asset-status/change-asset-status.component";
import {MaintenanceHistory} from "../schedule-maintenance/schedule-maintenance.component";

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

  getAssetStatus() {
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa(this.username + ':' + this.password)
    });
    return this.http.get<AssetStatus[]>(this.assetsUrl, {headers});
  }

  getMaintenance() {
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa(this.username + ':' + this.password)
    });
    return this.http.get<MaintenanceHistory[]>(this.maintenanceUrl, {headers});
  }

  deleteMaintenance(id : String) {
    const url = this.maintenanceUrl+`/'+${id}`;
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa(this.username + ':' + this.password)
    });
    return this.http.delete<String>(url, {headers});
  }

  scheduleMaintenance(maintenanceDetails: any) {
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
}
