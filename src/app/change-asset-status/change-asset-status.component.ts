import {Component, OnInit} from '@angular/core';
import {ApiService} from "../api.service";

@Component({
  selector: 'app-change-asset-status',
  templateUrl: './change-asset-status.component.html',
  styleUrls: ['./change-asset-status.component.css']
})
export class ChangeAssetStatusComponent implements OnInit{

  assetID : any;
  selectedAssetId : any;
  assetStatus: boolean = true;

constructor(private apiservice : ApiService) {}
  ngOnInit() {
  this.fetchAssetsId();
  }
  fetchAssetsId(){
  this.apiservice.getAssetId().subscribe((data)=>{
    this.assetID = data;
  },error => {
    console.error("Error Fetching AssetID",error)
  })
  }

  changeAssetStatus() {
    const assetId = this.selectedAssetId;
    const active=this.assetStatus;
    this.apiservice.changeAssetStatus(assetId,active).subscribe(
      (res) => {
          alert("Success");
          console.log(res);
      },
      (error) => {
        alert('Error changing asset status')
        console.error('Error changing asset status', error);
      }
    );
  }
}
