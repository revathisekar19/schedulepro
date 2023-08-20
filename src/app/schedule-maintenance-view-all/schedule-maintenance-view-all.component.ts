import {Component, OnInit, ViewChild} from '@angular/core';
import {AssetApiService} from "../services/asset-api.service";
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";


export interface MaintenanceHistory {
  id: string;
  parentAssetId: number;
  assetName: string;
  maintenanceStartTime: Date;
  maintenanceStopTime: Date;
  state: String;
}

@Component({
  selector: 'app-schedule-maintenance-view-all',
  templateUrl: './schedule-maintenance-view-all.component.html',
  styleUrls: ['./schedule-maintenance-view-all.component.css']
})


export class ScheduleMaintenanceViewAllComponent implements OnInit {

  dataSource: MatTableDataSource<MaintenanceHistory>;
  displayedColumns: string[] = ['parentAssetId', 'assetName', 'maintenanceStartTime', 'maintenanceStopTime','state','action'];


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private apiservice: AssetApiService) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit() {
    this.getMaintenanceFromServer();
  }

  getMaintenanceFromServer() {
    this.apiservice.getMaintenance().subscribe((data: any) => {

      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }, error => {
      console.error("Error Fetching AssetID", error)
    })
  }


  deleteMaintenance(element: MaintenanceHistory) {

    /*
    Pass this variable element.id
    Call the api  DELETE /maintenance/{id}
     */

    this.getMaintenanceFromServer();
  }
}
