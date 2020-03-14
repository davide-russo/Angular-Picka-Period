import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
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

@NgModule({
  declarations: [
    NgxPickaPeriodComponent,
    NgxPickaPeriodDirective,
    CalendarComponent,
    RangeSelectorComponent,
    ControlsComponent,
    TimeSelectorComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    OverlayModule,
    MatListModule,
    MatButtonModule,
    FormsModule,
    MatIconModule
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
