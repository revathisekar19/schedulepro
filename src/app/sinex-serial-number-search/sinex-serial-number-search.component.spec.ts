import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinexSerialNumberSearchComponent } from './sinex-serial-number-search.component';

describe('SinexSerialNumberSearchComponent', () => {
  let component: SinexSerialNumberSearchComponent;
  let fixture: ComponentFixture<SinexSerialNumberSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SinexSerialNumberSearchComponent]
    });
    fixture = TestBed.createComponent(SinexSerialNumberSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
