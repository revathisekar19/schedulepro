import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AssetApiService} from '../services/asset-api.service';
import {HttpClient} from '@angular/common/http';
import {DatePipe} from "@angular/common";
import {FormControl, FormGroup} from "@angular/forms";
import {MatSnackBar, MatSnackBarModule} from "@angular/material/snack-bar";
import {MatTableDataSource} from "@angular/material/table";
import {MatTabGroup} from "@angular/material/tabs";
import {isScheduler} from "rxjs/internal/util/isScheduler";
export interface AssetStatus {
  assetId: number;
  assetName: string;
  status: boolean;
  loading: boolean; // New property to track loading state
}
@Component({
  selector: 'app-schedule-maintenance-add-new',
  templateUrl: './schedule-maintenance-add-new.component.html',
  styleUrls: ['./schedule-maintenance-add-new.component.css']
})

export class ScheduleMaintenanceAddNewComponent implements OnInit {
  //@ViewChild('input') input!: ElementRef<HTMLInputElement>;
  assetStatus: AssetStatus[] = [];
  selectedAssetId: number | undefined;
  filteredOptions: AssetStatus[];
  selectedAsset: any;
  range = new FormGroup({
    start: new FormControl<Date | number | string>(new Date()),
    end: new FormControl<Date | number | string>(new Date()),
  });

  constructor(private apiservice: AssetApiService,
              private http: HttpClient,
              private datePipe: DatePipe,
              private snackBar: MatSnackBar) {
    this.filteredOptions = this.assetStatus.slice();
  }

  getAssetIds() {
    this.apiservice.getAssetStatus().subscribe({
      next :(data: any) => {
        this.assetStatus = data;
      }
  });
  }
  onAssetSelected() {
    const selectedAssetName = this.selectedAsset;
    const selectedAsset = this.assetStatus.find(asset => asset.assetName === selectedAssetName);
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
      .subscribe({
        next :(res) => {
          console.log('Maintenance scheduled successfully.', res);
        },
        error : error => {
          console.error('Error scheduling maintenance:', error);
        }
  });
  }
  ngOnInit(): void {
    this.getAssetIds();
  }
  openSnack(){
    if(this.selectedAsset != null){
    this.snackBar.open('Scheduled','close');}
  }
  openSnackBar(){
    this.snackBar.open('Canceled','close');
  }
}




