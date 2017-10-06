import { Component , OnInit} from '@angular/core';
import {DataService} from './customers-service/data.service';
import {Customer,User} from './model';
//This is another painter decorator
//it says: Hey AppComponent everybody in the html world will now call you my-app
//and when they call you in the html world you respond showing your template
@Component({
  moduleId: module.id, //to locate relative or no relative paths
  selector: 'customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['app.component.css']
})

//if we don't export this class no one will be able to see its magic powers
// therefore there is no way to import it
export class CustomerListComponent implements OnInit { 
  customers: Customer[];
  customer: Customer ;
  users: User[];

  constructor(private dataService: DataService){}
  //It seems like if i live this here it affects the customer-details component
 // hideAddress = false; 
    ngOnInit(){
    //this.customers = this.dataService.getCustomers();
       this.dataService.getUsers().subscribe(response=> {
           this.customers = response;
           //console.log(this.customers);
        });

        //Note: if i put console.log(this.customers) here the result will be undefined
        //Since observables are async
        //So don't!
      

    }
 shift(increment:number){
     let index = this.customers.findIndex(c => c === this.customer) + increment;
     index = index % (this.customers.length);
     index = index >= 0 ? index: this.customers.length-1 ;
     console.log('Current index: ', index);
     this.customer = this.customers[index];
 }


}
