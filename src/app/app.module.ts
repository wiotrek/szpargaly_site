import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DeviceDetectorModule } from 'ngx-device-detector';

import { AppComponent } from './app.component';
import { AppContactComponent } from './app-contact/app-contact.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AppContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    DeviceDetectorModule.forRoot(),
    HttpClientModule,
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
