import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleMaintenanceViewAllComponent } from './schedule-maintenance-view-all.component';

describe('ScheduleMaintenanceViewAllComponent', () => {
  let component: ScheduleMaintenanceViewAllComponent;
  let fixture: ComponentFixture<ScheduleMaintenanceViewAllComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScheduleMaintenanceViewAllComponent]
    });
    fixture = TestBed.createComponent(ScheduleMaintenanceViewAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
