import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AssetApiService} from '../services/asset-api.service';
import {HttpClient} from '@angular/common/http';
import {DatePipe} from "@angular/common";
import {FormControl, FormGroup} from "@angular/forms";
import {MatTableDataSource} from "@angular/material/table";
import {MatTabChangeEvent} from "@angular/material/tabs";
import {error} from "@angular/compiler-cli/src/transformers/util";


const ELEMENT_DATA: AssetStatus[] = [];

export interface AssetStatus {


  assetId: number;
  assetName: string;
  status: boolean;


}


export interface MaintenanceHistory {
  id: String;
  parentAssetId: number;
  maintenanceStartTime: string;
  maintenanceStopTime: string;
  state: string;
}

@Component({
  selector: 'app-schedule-maintenance',
  templateUrl: './schedule-maintenance.component.html',
  styleUrls: ['./schedule-maintenance.component.css'],

})

export class ScheduleMaintenanceComponent implements OnInit {
  assetIds: any[] = [];
  selectedAssetId: number | undefined;
  options: string[] = ['One', 'Two', 'Three', 'Four', 'Five'];
  filteredOptions: string[];
  selectedAsset: any;
  range = new FormGroup({
    start: new FormControl<Date | number | string>(new Date()),
    end: new FormControl<Date | number | string>(new Date()),
  });
  dataSource: MatTableDataSource<MaintenanceHistory>;
  displayedColumns: string[] = ['id', 'parentAssetId', 'maintenanceStartTime', 'maintenanceStopTime' , 'state'];

  constructor(private apiservice: AssetApiService, private http: HttpClient, private datePipe: DatePipe) {
    this.filteredOptions = this.options.slice();
    this.dataSource = new MatTableDataSource();

  }

  getAssetIds() {
    this.apiservice.getAssetStatus().subscribe({
      next :(data: any) => {
        this.assetIds = data;
      },
      error: error=>console.log('Error Fetching',error)
  });
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


  ngOnInit(): void {
    this.getAssetIds();
  }

}

