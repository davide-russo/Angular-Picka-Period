import { NgModule } from '@angular/core';
import { NGXDaterangePickerMaterialComponent } from './ngx-daterange-picker-material.component';
import { NGXDtrCalendarComponent } from './ngx-dtr-calendar.component';
import { CommonModule } from '@angular/common';
import { NGXDatetimeRangePickerMaterial } from './ngx-dtr-input.component';

const imports = [
    CommonModule
];

const declarations = [
    NGXDtrCalendarComponent,
    NGXDaterangePickerMaterialComponent,
    NGXDatetimeRangePickerMaterial
];

const exports = [
    NGXDaterangePickerMaterialComponent,
    NGXDatetimeRangePickerMaterial
];

@NgModule({
  imports: imports,
  declarations: declarations,
  exports: exports
})
export class NGXDaterangePickerMaterialModule { }
