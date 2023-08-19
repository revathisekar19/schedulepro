import {Component, OnInit, ViewChild} from '@angular/core';
import {AssetApiService} from './services/asset-api.service';
import {HttpClient} from '@angular/common/http';
import {DatePipe} from "@angular/common";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {


  // @ViewChild('sidenav') private sidenav: MatSidenav;
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;
  title = 'schedulepro';
  assetIds: any;
  startDate: any;

  constructor() {

  }





}
