import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDtrPickerComponent } from './ngx-dtr-picker.component';

describe('DateRangeComponent', () => {
  let component: NgxDtrPickerComponent;
  let fixture: ComponentFixture<NgxDtrPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxDtrPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxDtrPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
