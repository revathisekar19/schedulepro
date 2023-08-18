import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { AssetApiService } from '../services/asset-api.service';
import { HttpClient } from '@angular/common/http';
import {DatePipe} from "@angular/common";
import {FormControl, FormGroup} from "@angular/forms";

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

export class ScheduleMaintenanceComponent implements OnInit {
  assetIds: any;
  selectedAssetId: any;
  startDate: any;
  stopDate: any;
  assetID: any;
  currentDate = new Date();
  options: string[] = ['One', 'Two', 'Three', 'Four', 'Five'];
  filteredOptions: string[];
  selectedAsset : number | undefined
  assets = ELEMENT_DATA;

  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });
  constructor(private apiservice: AssetApiService, private http: HttpClient, private datePipe : DatePipe) {
    this.filteredOptions = this.options.slice();
    this.scheduleMaintenance();
  }

  ngOnInit() {
    this.getAssetIds();
  }
  selectAssetId(assetId: string) {
    this.selectedAssetId = assetId;
  }
  getAssetIds() {
    this.apiservice.getAssetId().subscribe(
      (data: any) => {
        this.assetIds = data;
      }
    );
  }


  scheduleMaintenance() {
    const maintenanceDetails = {
      assetId: this.selectedAssetId,
      startDate: this.datePipe.transform(this.startDate, 'yyyy-MM-dd'),
      stopDate: this.datePipe.transform(this.stopDate, 'yyyy-MM-dd')
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

