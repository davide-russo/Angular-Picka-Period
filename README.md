# angular-picka-period

A picker that allows you to select a range of period specifying day and time.

Inspired from https://github.com/codetok/angular-date-range-picker

Installation

```
npm i ngx-picka-picker
```

Module

```
import { PickaPeriodModule } from 'ngx-picka-period';
```

Template

```
<mat-form-field>
    <input matInput placeholder="Select a date range" [ngxPickaPeriod]="picker" value="3/1/2020-3/3/2020">
</mat-form-field>
<div style="position: relative;">
    <lib-picka-period #picker></lib-ngx-dtr-picker>
</div>
```
