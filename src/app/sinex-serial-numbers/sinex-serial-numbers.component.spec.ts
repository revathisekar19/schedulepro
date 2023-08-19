import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinexSerialNumbersComponent } from './sinex-serial-numbers.component';

describe('SinexSerialNumbersComponent', () => {
  let component: SinexSerialNumbersComponent;
  let fixture: ComponentFixture<SinexSerialNumbersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SinexSerialNumbersComponent]
    });
    fixture = TestBed.createComponent(SinexSerialNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
