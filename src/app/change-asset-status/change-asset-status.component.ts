import {Component, OnInit, ViewChild} from '@angular/core';
import {AssetApiService} from "../services/asset-api.service";
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
// import {SpinnerService} from "../services/spinner.service";


export interface AssetStatus {
  assetId: number;
  assetName: string;
  status: boolean;
  loading: boolean; // New property to track loading state
}

@Component({
  selector: 'app-change-asset-status',
  templateUrl: './change-asset-status.component.html',
  styleUrls: ['./change-asset-status.component.css'],
})


export class ChangeAssetStatusComponent implements OnInit {

  dataSource: MatTableDataSource<AssetStatus>;
  displayedColumns: string[] = ['assetId', 'assetName', 'status'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(private apiservice: AssetApiService) {
    this.dataSource = new MatTableDataSource();

  }
  ngOnInit() {
    this.getAssetStatusFromServer();
  }

  getAssetStatusFromServer() {
    this.apiservice.getAssetStatus().subscribe((data: any) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }, error => {
      console.error("Error Fetching AssetID", error)
    })
  }

  changeAssetStatus(newStatus: boolean, asset: AssetStatus) {
    // Set loading to true while waiting for the API response
    asset.loading = true;
    const originalStatus = asset.status;
    const assetId = asset.assetId;
    const active = newStatus;

    console.log("Selected Asset ID:", asset.assetId);
    console.log("New Status:", newStatus);
    this.apiservice.changeAssetStatus(assetId, newStatus).subscribe(
      (res) => {
        // Update the loading property after receiving the response
        asset.loading = false;

        // this.assetID = res.map(data => data.assetId);
      },
      (error) => {
        asset.loading = false; // Ensure loading is reset even on error

        console.error('Error changing asset status', error);
      }
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
