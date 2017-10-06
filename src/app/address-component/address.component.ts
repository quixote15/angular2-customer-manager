import { Component, Input} from '@angular/core';
import {Address} from '../model';

@Component({
    moduleId: module.id,
    selector: 'customer-address',
    templateUrl: './address.component.html'
})

export class AddressComponent  {
   @Input() address:Address;
   regions   = ['East', 'Midwest', 'North', 'South', 'West'];
   /* Create an array of states that includes previous states PLUS Illinois */
   states    = ['California', 'Illinois', 'Jalisco', 'Quebec'];
   hideAddress = true; //initial state
}