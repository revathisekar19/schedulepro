import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {LoaderService} from "../loader/loader.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(public loaderservice : LoaderService) {
  }

}
