import { Injectable } from '@angular/core';
import {Http,Response,Headers} from '@angular/http'; //to use here let angular know on app.module.ts
import {createTestCustomers} from '../test-data';
import{Observable} from 'rxjs/observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/toPromise';

import {User} from '../model';

@Injectable()
export class DataService{
    /**
     * GET ALL USERS
http://localhost:3000/users

GET SINGLE USER
http://localhost:3000/users/1

GET ALL COMPANIES
http://localhost:3000/companies

GET SINGLE COMPANY
http://localhost:3000/companies/1

GET ALL USERS OF A COMPANY
http://localhost:3000/companies/1/users

FILTER COMPANIES BY NAME
http://localhost:3000/companies?name=Microsoft
http://localhost:3000/companies?name=Microsoft&name=Apple

PAGINATION & LIMIT
http://localhost:3000/companies?_page=1&_limit=2

SORTING
http://localhost:3000/companies?_sort=name&_order=asc

USERS AGE RANGE
http://localhost:3000/users?age_gte=30
http://localhost:3000/users?age_gte=30&age_lte=40

FULL TEXT SEARCH
http://localhost:3000/users?q=Paul
     * 
     * 
     */




    private baseUrl = 'http://localhost:3000';
    constructor(private http: Http){}

    getCustomers(){
        return createTestCustomers();
    }

    getUsers():Observable<User[]>{
        let users = this.http.get(`${this.baseUrl}/users`,{headers:this.getHeaders()}).map(us => us.json() ); 
        //if i use us.json().data as User[] it doesnt work...why?
        console.log(`This is the users ${users}`);
        return users;
    }

   getCustomer(id:number):Observable<User>{
    let user = this.http.get(`${this.baseUrl}/user/$id`, {headers:this.getHeaders()}).map(res => res.json());

    return user;
   }


   saveCustomer(person:User){
       console.log(`Salvando pessoa com id = ${person.id}`);
       this.http //save this user using json format
            .post(`${this.baseUrl}/users/${person.id}`,JSON.stringify(person),{headers:this.getHeaders()})
            .map( res => {
                res.json();
                console.log(res);
            })
            .catch(errorHandler);
   }

   //add headers
   private getHeaders(){
    let headers = new Headers();
    headers.append('Content-Type','application/json'); 
    return headers;
  }
}

function errorHandler(error:any){

    return Observable.throw("Sorry the customer data cannot be saved!");
}