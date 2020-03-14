Angular Picka Period
====================

**Angular datetime period picker**
**This package supports Angular 9**

Description
-----------
Angular responsive datetime period picker. Online demo(StackBlitz) is [here](https://angular-picka-period.stackblitz.io/).
This picker is responsive design, so feel free to try it in your desktops, tablets and mobile devices.

Inspiration
-----------
Based on the work of: [codetok](https://github.com/codetok/angular-date-range-picker) and [daterangepicker](http://www.daterangepicker.com/).

How to Use
----------
 1. Install with [npm](https://www.npmjs.com): `npm i ngx-picka-picker`.
 2. Import the module __NgxPickaPeriodModule__ and add it to your module imports.
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
 4. Add angular-material-theme ngx-picka-period-theme to your theme.scss file.
 ```scss
    .my-theme {
      @include angular-material-theme($theme);
      @include ngx-picka-period-theme($theme);
    }
 ```
 5. __ENJOY IT!__
    

Animation
---------
This library uses Angular animations to improve the user experience, 
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

Angular Material
----------------
This library relies on the Angular Material library,
therefore you need to install `@angular/material` package, for more info please follow this [guide](https://material.angular.io/guide/getting-started).
Remember to add the ngx-picka-period-theme to your theme configuration.

Dependencies
------------
```
    "@angular/common": "^9.0.5",
    "@angular/core": "^9.0.5",
    "@angular/material": "^9.1.1",
    "@angular/animations": "^9.0.5",
    "moment": "^2.24.0"
```

Demo
----
- Online demo(StackBlitz) is [here](https://angular-picka-period.stackblitz.io)

License
-------
* License: MIT

Author
------
**Davide-Russo**
