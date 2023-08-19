import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DatePipe} from "@angular/common";
import {ScheduleMaintenanceComponent} from './schedule-maintenance/schedule-maintenance.component';
import {ChangeAssetStatusComponent} from './change-asset-status/change-asset-status.component';
import {NavbarComponent} from './navbar/navbar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatRadioModule} from "@angular/material/radio";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatMenuModule} from "@angular/material/menu";
import {MatTableModule} from "@angular/material/table";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatCardModule} from "@angular/material/card";
import {MatSelectModule} from "@angular/material/select";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatSortModule} from "@angular/material/sort";
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SinexSerialNumbersComponent } from './sinex-serial-numbers/sinex-serial-numbers.component';
import {MatTabsModule} from "@angular/material/tabs";

@NgModule({
  declarations: [
    AppComponent,
    ScheduleMaintenanceComponent,
    ChangeAssetStatusComponent,
    NavbarComponent,
    HomeComponent,
    NotFoundComponent,
    SinexSerialNumbersComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatDatepickerModule, MatFormFieldModule, MatNativeDateModule,
    MatIconModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', redirectTo: '/home', pathMatch: 'full'},
      {path: 'asset-maintenance', component: ScheduleMaintenanceComponent},
      {path: 'sinex-serial-number', component: SinexSerialNumbersComponent},
      {path: 'change-asset-status', component: ChangeAssetStatusComponent},
      {path: 'home', component: HomeComponent},
      {path: '**', component: NotFoundComponent}
    ]),
    BrowserAnimationsModule,
    MatRadioModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatExpansionModule,
    MatTooltipModule,
    MatMenuModule,
    MatTableModule,
    MatSlideToggleModule,
    MatPaginatorModule,
    MatInputModule,
    MatDatepickerModule, MatAutocompleteModule, MatCardModule, MatSelectModule, MatProgressSpinnerModule, MatRippleModule, MatSortModule, MatTabsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule {
}
