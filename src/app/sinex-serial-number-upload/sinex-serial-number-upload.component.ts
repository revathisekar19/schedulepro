import { Component } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-sinex-serial-number-upload',
  templateUrl: './sinex-serial-number-upload.component.html',
  styleUrls: ['./sinex-serial-number-upload.component.css']
})
export class SinexSerialNumberUploadComponent {
  constructor(private snackBar : MatSnackBar) {
  }
openSnack(){
  this.snackBar.open('File Uploaded','close');
}
}
