import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleMaintenanceAddNewComponent } from './schedule-maintenance-add-new.component';

describe('ScheduleMaintenanceAddNewComponent', () => {
  let component: ScheduleMaintenanceAddNewComponent;
  let fixture: ComponentFixture<ScheduleMaintenanceAddNewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScheduleMaintenanceAddNewComponent]
    });
    fixture = TestBed.createComponent(ScheduleMaintenanceAddNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
