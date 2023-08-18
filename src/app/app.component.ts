import {Component, OnInit} from '@angular/core';
import {AssetApiService} from './services/asset-api.service';
import {HttpClient} from '@angular/common/http';
import {DatePipe} from "@angular/common";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  // @ViewChild('sidenav') private sidenav: MatSidenav;
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;

  title = 'schedulepro';
  //selectedAssetId: any
  assetIds: any;
  selectedAssetId: any;
  startDate: any;
  stopDate: any;
  assetID: any;
  currentDate = new Date();

  constructor(private apiservice: AssetApiService, private http: HttpClient, private datePipe: DatePipe) {
    this.scheduleMaintenance();
  }

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
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

  changeAssetStatus(active: boolean) {
    const assetId = this.selectedAssetId;
    this.apiservice.changeAssetStatus(assetId, active).subscribe(
      (res) => {
        alert('Asset status changed successfully');
        console.log('Asset status changed successfully', res);
      },
      (error) => {
        alert('Error changing asset status')
        console.error('Error changing asset status', error);
      }
    );
  }
}
