import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AppComponent }  from './app.component';
import {CustomerListComponent} from './customer-list.component';
import {CustomerDetailComponent} from './customer-detail.component';
import {AddressComponent} from './address-component/address.component';
import {DataService} from './customers-service/data.service';
//this guy is a decorator
//what decorators do? it kind of paints all data in the following class
//In this case the AppModule class
//Note: NgModule() is a function indeed
@NgModule({
  imports:      [ BrowserModule, FormsModule , HttpModule], //what stuff do i need ? External imports
  declarations: [ 
    AppComponent,
    CustomerListComponent,
    CustomerDetailComponent,
    AddressComponent,
    
  
  ], // whats things are in my app
  providers: [DataService],
  bootstrap:    [ AppComponent ] //AppModule asks where do i start ? and the decorator gives the answer
})
export class AppModule { }
