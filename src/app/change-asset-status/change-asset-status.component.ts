import {Component, OnInit} from '@angular/core';
import {ApiService} from "../api.service";

@Component({
  selector: 'app-change-asset-status',
  templateUrl: './change-asset-status.component.html',
  styleUrls: ['./change-asset-status.component.css']
})
export class ChangeAssetStatusComponent implements OnInit{
  assetID: number[] = [];
  selectedAssetId : any;
  assetStatus: boolean = true;

constructor(private apiservice : ApiService) {}
  ngOnInit() {
    console.log("Selected Asset ID:", this.selectedAssetId);

    this.fetchAssetsId();
  }
  fetchAssetsId(){
  this.apiservice.getAssetId().subscribe((data:any)=>{
    console.log(data);
    this.assetID = data;
  },error => {
    console.error("Error Fetching AssetID",error)
  })
  }

  changeAssetStatus() {

    const assetId = this.selectedAssetId;
    const active=this.assetStatus;
    console.log("Selected Asset ID:", this.selectedAssetId);
    if(this.selectedAssetId !== null){
      this.apiservice.changeAssetStatus(assetId,active).subscribe(
      (res) => {
        // this.assetID = res.map(data => data.assetId);
        alert("Success");
        console.log(res);
      },
      (error) => {
        alert('Error changing asset status')
        console.error('Error changing asset status', error);
      }
    );
    }else {
      console.warn('Please select an asset before submitting.');
    }
  }
}
