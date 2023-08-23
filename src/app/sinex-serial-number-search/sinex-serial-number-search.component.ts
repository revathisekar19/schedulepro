import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {AssetApiService} from "../services/asset-api.service";
import {AssetStatus} from "../change-asset-status/change-asset-status.component";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
export interface SerialNumber {
  id: string;
  assetID:string;
  assetGroupName: string;
  serialNo: string;
}

@Component({
  selector: 'app-sinex-serial-number-search',
  templateUrl: './sinex-serial-number-search.component.html',
  styleUrls: ['./sinex-serial-number-search.component.css']
})
export class SinexSerialNumberSearchComponent implements OnInit{
  displayedColumns: string[] = ['id','assetID', 'assetGroupName', 'serialNo'];
  dataSource: MatTableDataSource<SerialNumber>;
  assetID : any;
  assetData : any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
constructor(private apiservice: AssetApiService) {
    this.dataSource = new MatTableDataSource();
}
  ngOnInit() {
    this.getAssetId();
    this.getNumber();
  }
getAssetId(){
    this.apiservice.getAssetStatus().subscribe((data)=>{
      this.assetData = data;
      this.assetID = data.assetID;
    })
}

  getNumber(){
    const assetID = this.assetID;
    // let assetID  = '562115';
    this.apiservice.getSerialNumber(assetID).subscribe((res:any)=>{
      console.log(res);
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
