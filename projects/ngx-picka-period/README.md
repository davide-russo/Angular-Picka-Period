Angular Picka Period
========================

**Angular date time picker**
**This package supports Angular 9**


Description
-------
Angular responsive date time picker. Online demo(StackBlitz) is [here](https://ngx-picka-period.stackblitz.io).
This picker is responsive design, so feel free to try it in your desktops, tablets and mobile devices.

Inspiretion
--------
Based on the work of: [codetok](https://github.com/codetok/angular-date-range-picker) and [daterangepicker](http://www.daterangepicker.com/)

How to Use
-------

 1. Install with [npm](https://www.npmjs.com):  `npm i ngx-picka-picker`
 2. Import the module __NgxPickaPeriodModule__ and add it to your module imports
 ```typescript
    import { NgxPickaPeriodModule } from 'ngx-picka-period';

    imports: [
        NgxPickaPeriodModule
       // ...
    ],

```
 3. Connect the picker to the template with __ngxPickaPeriod__ directive to your __matInput__, you also have to provide a __NgxPickaPeriodConfig__ to the library.
 ```html
    <mat-form-field>
      <input matInput placeholder="Picka Period" ngxPickaPeriod [ngxPickaPeriodConfig]="config"
             [value]="value">
    </mat-form-field>
```
 4. __ENJOY IT!__
    

Animation
-------
This picker uses angular animations to improve the user experience, 
therefore you need to install `@angular/animations` and import `BrowserAnimationsModule` to your application. 
```
npm install @angular/animations --save
```
```typescript
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        //...
    ],
    //...
})
export class YourAppModule { }
```
If you prefer to disable animation effect, use `NoopAnimationsModule` instead.

Dependencies
-------
```
    "@angular/common": "^9.0.5",
    "@angular/core": "^9.0.5",
    "@angular/material": "^9.1.1",
    "@angular/animations": "^9.0.5",
    "moment": "^2.24.0"
```

Demo
-------
- Online demo(StackBlitz) is [here]()

License
-------
* License: MIT

Author
-------
**Davide-Russo**
