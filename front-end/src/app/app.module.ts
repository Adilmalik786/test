
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import {MaterialModule} from './material.module'

import {TestService} from './shared/services/test.service'


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ModalModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ToastrModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ModalModule,
    AccordionModule,
    MaterialModule
  ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
