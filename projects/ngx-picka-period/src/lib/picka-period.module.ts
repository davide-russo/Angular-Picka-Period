import { NgModule } from '@angular/core';
import { PickaPeriodComponent } from './picka-period.component';
import { PickaPeriodCalendarComponent } from './picka-period-calendar.component';
import { CommonModule } from '@angular/common';
import { PickaPeriodInput } from './picka-period-input.component';

const imports = [
    CommonModule
];

const declarations = [
    PickaPeriodCalendarComponent,
    PickaPeriodComponent,
    PickaPeriodInput
];

const exports = [
    PickaPeriodComponent,
    PickaPeriodInput
];

@NgModule({
  imports: imports,
  declarations: declarations,
  exports: exports
})
export class PickaPeriodModule { }
