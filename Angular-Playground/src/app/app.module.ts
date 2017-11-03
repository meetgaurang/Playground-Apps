import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SampleComponent } from './sample.component';
import { AppRoutingModule } from './app-routing.module';
import { DataBinding } from './databinding/databinding.component';

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    DataBinding
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
