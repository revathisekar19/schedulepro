import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {Router, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {DatePipe} from "@angular/common";
import { ScheduleMaintenanceComponent } from './schedule-maintenance/schedule-maintenance.component';
import { ChangeAssetStatusComponent } from './change-asset-status/change-asset-status.component';

@NgModule({
  declarations: [
    AppComponent,
    ScheduleMaintenanceComponent,
    ChangeAssetStatusComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'asset-maintenance', component: ScheduleMaintenanceComponent},
      {path:'change-asset-status', component: ChangeAssetStatusComponent}
    ])
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
