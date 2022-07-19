import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimengModule } from './ui/primeng.module';

import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrimengModule,
    SharedModule,
    BrowserAnimationsModule,
<<<<<<< HEAD
    HttpClientModule,
    ReactiveFormsModule
=======
    HttpClientModule

>>>>>>> nogaye
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
