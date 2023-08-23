import {Component, OnInit, ViewChild} from '@angular/core';
import {AssetApiService} from "../services/asset-api.service";
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {Observable} from "rxjs";
import {AssetStatus} from "../schedule-maintenance-add-new/schedule-maintenance-add-new.component";
import {ConfirmationDialogComponent} from "../confirmation-dialog/confirmation-dialog.component";

export interface MaintenanceHistory {
  id: string ;
  parentAssetId: number;
  assetName: string;
  maintenanceStartTime: string;
  maintenanceStopTime: string;
  state: string;
}

@Component({
  selector: 'app-schedule-maintenance-view-all',
  templateUrl: './schedule-maintenance-view-all.component.html',
  styleUrls: ['./schedule-maintenance-view-all.component.css']
})


export class ScheduleMaintenanceViewAllComponent implements OnInit {
  selectedId : any;
  assetIds: string[] = [];

  MaintenanceHistory :any[] = [];
  dataSource: MatTableDataSource<MaintenanceHistory>;
  displayedColumns: string[] = ['parentAssetId', 'assetName', 'maintenanceStartTime', 'maintenanceStopTime', 'state', 'action'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private apiservice: AssetApiService) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit() {
    this.getMaintenanceFromServer();
  }

  getMaintenanceFromServer() {
    this.apiservice.getMaintenance().subscribe((data: MaintenanceHistory[]) => {
      this.MaintenanceHistory = data;
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }, error => {
      console.error("Error Fetching AssetID", error)
    });
  }

  deleteMaintenance(element: MaintenanceHistory) {
    const id = element.id;

 this.apiservice.deleteMaintenance(element).subscribe((res)=>{
   console.log(res);
   alert('Deleted');
 });
    this.getMaintenanceFromServer();
  }

}
