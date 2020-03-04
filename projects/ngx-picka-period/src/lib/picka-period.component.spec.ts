import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickaPeriodComponent } from './picka-period.component';

describe('DateRangeComponent', () => {
  let component: PickaPeriodComponent;
  let fixture: ComponentFixture<PickaPeriodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickaPeriodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickaPeriodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
