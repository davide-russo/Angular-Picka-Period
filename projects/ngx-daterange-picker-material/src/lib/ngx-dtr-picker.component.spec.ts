import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NGXDaterangePickerMaterialComponent } from './ngx-daterange-picker-material.component';

describe('DateRangeComponent', () => {
  let component: NGXDaterangePickerMaterialComponent;
  let fixture: ComponentFixture<NGXDaterangePickerMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NGXDaterangePickerMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NGXDaterangePickerMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
