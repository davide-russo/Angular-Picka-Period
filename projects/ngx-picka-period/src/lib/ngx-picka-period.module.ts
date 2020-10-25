import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {OverlayModule} from '@angular/cdk/overlay';

import {NgxPickaPeriodComponent} from './ngx-picka-period/ngx-picka-period.component';
import {NgxPickaPeriodDirective} from './ngx-picka-period.directive';
import {CalendarComponent} from './calendar/calendar.component';
import {RangeSelectorComponent} from './range-selector/range-selector.component';
import {ControlsComponent} from './controls/controls.component';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {TimeSelectorComponent} from './time-selector/time-selector.component';
import {FormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatRippleModule} from '@angular/material/core';
import {RangeDatePickerComponent} from './date-pickers/range-date-picker/range-date-picker.component';
import {SingleDatePickerComponent} from './date-pickers/single-date-picker/single-date-picker.component';

@NgModule({
  declarations: [
    NgxPickaPeriodComponent,
    NgxPickaPeriodDirective,
    CalendarComponent,
    RangeSelectorComponent,
    ControlsComponent,
    TimeSelectorComponent,
    RangeDatePickerComponent,
    SingleDatePickerComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    NoopAnimationsModule,
    BrowserModule,
    OverlayModule,
    MatListModule,
    MatButtonModule,
    FormsModule,
    MatIconModule,
    MatRippleModule
  ],
  exports: [
    NgxPickaPeriodComponent,
    NgxPickaPeriodDirective
  ],
  entryComponents: [
    NgxPickaPeriodComponent
  ]
})
export class NgxPickaPeriodModule { }
