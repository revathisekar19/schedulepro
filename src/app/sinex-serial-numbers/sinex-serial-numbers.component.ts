import { Component } from '@angular/core';

@Component({
  selector: 'app-sinex-serial-numbers',
  templateUrl: './sinex-serial-numbers.component.html',
  styleUrls: ['./sinex-serial-numbers.component.css']
})
export class SinexSerialNumbersComponent {
  selectedFile: File | null = null;
  errorMessage: string | null = null;
  uploadFile() {
    if (this.selectedFile) {
      if (this.selectedFile.type !== 'text/csv') {
        this.errorMessage = 'Only CSV files are allowed.';
      } else {
        this.errorMessage = 'File Uploaded';
      }
    }
  }
}
