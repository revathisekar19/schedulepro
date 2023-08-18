import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { AssetApiService } from '../services/asset-api.service';
import { HttpClient } from '@angular/common/http';
import {DatePipe} from "@angular/common";
import {FormControl, FormGroup} from "@angular/forms";

// const ELEMENT_DATA: AssetStatus[] = [{assetId: 1300155, assetName: 'MV Heavy Lane', status: true}
//   , {assetId: 562115, assetName: 'MV Eugiene Jones', status: false}
//   , {assetId: 562115, assetName: 'MV Eugiene Jones', status: false}
//   , {assetId: 562115, assetName: 'MV Eugiene Jones', status: false}
//   , {assetId: 562115, assetName: 'MV Eugiene Jones', status: true}
//   , {assetId: 562115, assetName: 'MV Eugiene Jones', status: false}
//   , {assetId: 562115, assetName: 'MV Eugiene Jones', status: true}
//   , {assetId: 562115, assetName: 'MV Eugiene Jones', status: false}
//   , {assetId: 562115, assetName: 'MV Eugiene Jones', status: true}
//   , {assetId: 562115, assetName: 'MV Eugiene Jones', status: false}
//   , {assetId: 562115, assetName: 'MV Eugiene Jones', status: false}
//   , {assetId: 562115, assetName: 'MV Eugiene Jones', status: true}
//   , {assetId: 562115, assetName: 'MV Eugiene Jones', status: false}
//   , {assetId: 562115, assetName: 'MV Eugiene Jones', status: false}
//   , {assetId: 562115, assetName: 'MV Eugiene Jones', status: true}
//   , {assetId: 562115, assetName: 'MV Eugiene Jones', status: false}
//   , {assetId: 562115, assetName: 'MV Eugiene Jones', status: false}
//   , {assetId: 562115, assetName: 'MV Eugiene Jones', status: false}
// ];
const ELEMENT_DATA: AssetStatus[]=[];
export interface AssetStatus {
  assetId: number;
  assetName: string;
  status: boolean;
}
@Component({
  selector: 'app-schedule-maintenance',
  templateUrl: './schedule-maintenance.component.html',
  styleUrls: ['./schedule-maintenance.component.css'],

})

export class ScheduleMaintenanceComponent {
  assetIds: any[] = [];
  selectedAssetId: number | undefined;
  // assetID: any;
  currentDate = new Date();
  options: string[] = ['One', 'Two', 'Three', 'Four', 'Five'];
  filteredOptions: string[];
  selectedAsset : any;
  range = new FormGroup({
    start: new FormControl<Date|number | string>(new Date()),
    end: new FormControl<Date|number | string>(new Date()),
  });
  constructor(private apiservice: AssetApiService, private http: HttpClient, private datePipe : DatePipe) {
    this.filteredOptions = this.options.slice();
    this.getAssetIds();
    this.scheduleMaintenance();
  }
  // selectAssetId(assetId: string) {
  //   this.selectedAssetId = assetId;
  // }
  getAssetIds() {
    this.apiservice.getAssetId().subscribe(
      (data: any) => {
        this.assetIds = data;
      }
    );
  }
  onAssetSelected() {
    const selectedAssetName = this.selectedAsset;

    const selectedAsset = this.assetIds.find(asset => asset.assetName === selectedAssetName);

    if (selectedAsset) {
      this.selectedAssetId = selectedAsset.assetId;
    } else {
      this.selectedAssetId = undefined;
    }
  }
  scheduleMaintenance() {
    const startDate = this.range.controls.start.value;
    const endDate = this.range.controls.end.value;
    const maintenanceDetails = {
      assetIds: this.selectedAssetId,
      startDate: this.datePipe.transform(startDate, 'yyyy-MM-dd'),
      endDate: this.datePipe.transform(endDate, 'yyyy-MM-dd')
    };

    this.apiservice.scheduleMaintenance(maintenanceDetails)
      .subscribe(
        (res) => {
          console.log('Maintenance scheduled successfully.', res);
        },
        (error) => {
          console.error('Error scheduling maintenance:', error);
        }
      );
  }
}

