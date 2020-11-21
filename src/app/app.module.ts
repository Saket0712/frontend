import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ques3Component } from './ques3/ques3.component';
import { HomeComponent } from './home/home.component';
import { Ques1Component } from './ques1/ques1.component';
import { CompoOneComponent } from './compo-one/compo-one.component';
import { CompotwoComponent } from './compotwo/compotwo.component';
import { CompothreeComponent } from './compothree/compothree.component';
import { CompofourComponent } from './compofour/compofour.component';

@NgModule({
  declarations: [
    AppComponent,
    Ques3Component,
    HomeComponent,
    Ques1Component,
    CompoOneComponent,
    CompotwoComponent,
    CompothreeComponent,
    CompofourComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
