import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

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


  changeAssetStatus(assetId: number, active: boolean){
    const apiUrl = `asset/set-asset-status/${assetId}`;
    // const params = { active: active.toString() };
    // const requestBody = { isActive: active };
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa(this.username + ':' + this.password)
    });
    return this.http.post(`${apiUrl}?active=${active}`, {}, { headers });
  }
}
