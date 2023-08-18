import {AfterViewInit, Component, NgModule, OnInit, ViewChild} from '@angular/core';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {AssetApiService} from "../services/asset-api.service";
import {MatTableModule} from '@angular/material/table';


export interface AssetStatus {
  assetId: number;
  assetName: string;
  status: boolean;
}
const ELEMENT_DATA: AssetStatus[] = [{assetId: 1300155, assetName: 'MV Heavy Lane', status: true}
  , {assetId: 562115, assetName: 'MV Eugiene Jones', status: false}
  , {assetId: 562115, assetName: 'MV Eugiene Jones', status: false}
  , {assetId: 562115, assetName: 'MV Eugiene Jones', status: false}
  , {assetId: 562115, assetName: 'MV Eugiene Jones', status: true}
  , {assetId: 562115, assetName: 'MV Eugiene Jones', status: false}
  , {assetId: 562115, assetName: 'MV Eugiene Jones', status: true}
  , {assetId: 562115, assetName: 'MV Eugiene Jones', status: false}
  , {assetId: 562115, assetName: 'MV Eugiene Jones', status: true}
  , {assetId: 562115, assetName: 'MV Eugiene Jones', status: false}
  , {assetId: 562115, assetName: 'MV Eugiene Jones', status: false}
  , {assetId: 562115, assetName: 'MV Eugiene Jones', status: true}
  , {assetId: 562115, assetName: 'MV Eugiene Jones', status: false}
  , {assetId: 562115, assetName: 'MV Eugiene Jones', status: false}
  , {assetId: 562115, assetName: 'MV Eugiene Jones', status: true}
  , {assetId: 562115, assetName: 'MV Eugiene Jones', status: false}
  , {assetId: 562115, assetName: 'MV Eugiene Jones', status: false}
  , {assetId: 562115, assetName: 'MV Eugiene Jones', status: false}
];

@Component({
  selector: 'app-change-asset-status',
  templateUrl: './change-asset-status.component.html',
  styleUrls: ['./change-asset-status.component.css'],
})


export class ChangeAssetStatusComponent implements OnInit {

  displayedColumns: string[] = ['assetId', 'assetName', 'status'];
  dataSource = ELEMENT_DATA;
  assetID: number[] = [];
  selectedAssetId: any;
  assetStatus: boolean = true;

  constructor(private apiservice: AssetApiService) {
  }

  ngOnInit() {
    this.fetchAssetsId();
  }

  fetchAssetsId() {
    this.apiservice.getAssetId().subscribe((data: any) => {
      console.log(data);
      this.assetID = data;
    }, error => {
      console.error("Error Fetching AssetID", error)
    })
  }

  changeAssetStatus(newStatus: boolean, asset: AssetStatus) {

    const assetId = asset.assetId;
    const active = newStatus;
    console.log("Selected Asset ID:", asset.assetId);
    console.log("New Status:", newStatus);
    this.apiservice.changeAssetStatus(assetId, newStatus).subscribe(
      (res) => {
        // this.assetID = res.map(data => data.assetId);
      },
      (error) => {
        console.error('Error changing asset status', error);
      }
    );
  }


}
