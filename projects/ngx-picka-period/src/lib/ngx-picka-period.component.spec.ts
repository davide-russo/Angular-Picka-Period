import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxPickaPeriodComponent } from './ngx-picka-period.component';

describe('NgxPickaPeriodComponent', () => {
  let component: NgxPickaPeriodComponent;
  let fixture: ComponentFixture<NgxPickaPeriodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxPickaPeriodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxPickaPeriodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
