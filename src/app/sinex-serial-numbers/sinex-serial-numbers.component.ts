import { Component } from '@angular/core';

@Component({
  selector: 'app-sinex-serial-numbers',
  templateUrl: './sinex-serial-numbers.component.html',
  styleUrls: ['./sinex-serial-numbers.component.css']
})
export class SinexSerialNumbersComponent {
  selectedFile: File | null = null;
  message: string | null = null;
  uploadFile() {
    this.message = 'File Uploaded';
  }
}
