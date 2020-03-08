import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {NgxPickaPeriodComponent} from './ngx-picka-period/ngx-picka-period.component';
import {NgxPickaPeriodDirective} from './ngx-picka-period.directive';
import {OverlayModule} from '@angular/cdk/overlay';

@NgModule({
  declarations: [
    NgxPickaPeriodComponent,
    NgxPickaPeriodDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    OverlayModule,
  ],
  exports: [
    NgxPickaPeriodComponent,
    NgxPickaPeriodDirective
  ]
})
export class NgxPickaPeriodModule { }
