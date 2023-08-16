import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeAssetStatusComponent } from './change-asset-status.component';

describe('ChangeAssetStatusComponent', () => {
  let component: ChangeAssetStatusComponent;
  let fixture: ComponentFixture<ChangeAssetStatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChangeAssetStatusComponent]
    });
    fixture = TestBed.createComponent(ChangeAssetStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
