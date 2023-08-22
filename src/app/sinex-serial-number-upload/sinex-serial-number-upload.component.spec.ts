import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinexSerialNumberUploadComponent } from './sinex-serial-number-upload.component';

describe('SinexSerialNumberUploadComponent', () => {
  let component: SinexSerialNumberUploadComponent;
  let fixture: ComponentFixture<SinexSerialNumberUploadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SinexSerialNumberUploadComponent]
    });
    fixture = TestBed.createComponent(SinexSerialNumberUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
