import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {OverlayModule} from '@angular/cdk/overlay';

import {NgxPickaPeriodComponent} from './ngx-picka-period/ngx-picka-period.component';
import {NgxPickaPeriodDirective} from './ngx-picka-period.directive';
import {CalendarComponent} from './calendar/calendar.component';
import {RangeSelectorComponent} from './range-selector/range-selector.component';
import { ControlsComponent } from './controls/controls.component';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [
    NgxPickaPeriodComponent,
    NgxPickaPeriodDirective,
    CalendarComponent,
    RangeSelectorComponent,
    ControlsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    OverlayModule,
    MatListModule,
  ],
  exports: [
    NgxPickaPeriodComponent,
    NgxPickaPeriodDirective
  ]
})
export class NgxPickaPeriodModule { }
