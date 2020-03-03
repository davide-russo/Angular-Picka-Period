import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgxDtrPickerModule } from '../../projects/ngx-dtr-picker/src/public_api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxDtrPickerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
