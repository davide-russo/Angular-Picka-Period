import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

import {AppComponent} from './app.component';
import {PickaPeriodModule} from '../../projects/picka-period/src/lib/picka-period.module';

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatInputModule,
        MatFormFieldModule,
        PickaPeriodModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
