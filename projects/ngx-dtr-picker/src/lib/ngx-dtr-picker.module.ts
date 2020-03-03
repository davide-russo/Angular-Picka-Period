import { NgModule } from '@angular/core';
import { NgxDtrPickerComponent } from './ngx-dtr-picker.component';
import { CalendarComponent } from './calendar.component';
import { CommonModule } from '@angular/common';
import { NGXDatetimeRangePickerMaterial } from './datepicker-input.component';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
      CalendarComponent,
      NgxDtrPickerComponent,
      NGXDatetimeRangePickerMaterial
    ],
  exports: [NgxDtrPickerComponent, NGXDatetimeRangePickerMaterial]
})
export class NgxDtrPickerModule { }
