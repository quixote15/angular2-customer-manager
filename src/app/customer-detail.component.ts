import { Component, Input,Output, EventEmitter } from '@angular/core';

import {DataService} from './customers-service/data.service';
import {Customer,User} from './model';
//This is another painter decorator
//it says: Hey AppComponent everybody in the html world will now call you my-app
//and when they call you in the html world you respond showing your template
@Component({
  moduleId: module.id, //to locate relative or no relative paths
  selector: 'customer-detail',
  templateUrl: './customer-detail.component.html',
 
})

//if we don't export this class no one will be able to see its magic powers
// therefore there is no way to import it
export class CustomerDetailComponent { 
  @Input() customer: User ;
  @Output() shift = new EventEmitter<number>();

  constructor(private dataService:DataService){}

  left(){
    this.shift.emit(-1); //pass value 1 to the event
  }

  right(){
    this.shift.emit(1);
  }

  updateCustomer(){
    console.log("Iniciando salvamento...");
    this.dataService.saveCustomer(this.customer);
  }
}
