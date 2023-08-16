import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';
import {DatePipe} from "@angular/common";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-schedule-maintenance',
  templateUrl: './schedule-maintenance.component.html',
  styleUrls: ['./schedule-maintenance.component.css']
})

export class ScheduleMaintenanceComponent implements OnInit {
  title = 'schedulepro';
  //selectedAssetId: any
  assetIds: any;
  selectedAssetId: any;
  startDate: any;
  stopDate: any;
  assetID: any;
  currentDate = new Date();

  constructor(private apiservice: ApiService, private http: HttpClient,private datePipe : DatePipe,private modalService: NgbModal) {
    this.scheduleMaintenance();
  }

  ngOnInit() {
    this.getAssetIds();
  }

  getAssetIds() {
    this.apiservice.getAssetId().subscribe(
      (data: any) => {
        this.assetIds = data;
        console.log(this.assetIds);
      },
      (error) => {
        console.error('Error fetching asset IDs:', error);
      }
    );
  }

  scheduleMaintenance() {
    const maintenanceDetails = {
      assetId: this.selectedAssetId,
      startDate: this.datePipe.transform(this.startDate,'yyyy-MM-dd'),
      stopDate: this.datePipe.transform(this.stopDate,'yyyy-MM-dd')
    };

    this.apiservice.scheduleMaintenance(maintenanceDetails)
      .subscribe(
        (res) => {
          console.log('Maintenance scheduled successfully.',res);
        },
        (error) => {
          console.error('Error scheduling maintenance:', error);
        }
      );
  }

  changeAssetStatus(active: boolean) {
    const assetId = this.selectedAssetId;
    this.apiservice.changeAssetStatus(assetId, active).subscribe(
      (res) => {
        alert('Asset status changed successfully');
        console.log('Asset status changed successfully',res);
      },
      (error) => {
        alert('Error changing asset status')
        console.error('Error changing asset status', error);
      }
    );
  }
}
