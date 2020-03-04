# ngx-picka-period

A picker that allows you to select a range of period specifying day and time.

Inspired from https://github.com/codetok/angular-date-range-picker

Installation

```
npm i ngx-datetime-range-picker-material
```

Module

```
import { NGXDaterangePickerMaterialModule } from 'ngx-datetime-range-picker-material';
```

Template

```
<mat-form-field>
    <input matInput placeholder="Select a date range" [ngxDtrPicker]="picker" value="3/1/2020-3/3/2020" >
</mat-form-field>
<div style="position: relative;  ">
    <lib-ngx-dtr-picker #picker  ></lib-ngx-dtr-picker>
</div>
```
