import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SingleDatePickerComponent } from './single-selection.component';

describe('SingleSelectionComponent', () => {
  let component: SingleDatePickerComponent;
  let fixture: ComponentFixture<SingleDatePickerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleDatePickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleDatePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
