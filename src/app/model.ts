//Customer model to be used by my component

export class Customer {
    id: number;
    name: string;
    address: Address
};

export class Address {
    street: string;
    city: string;
    state: string;
    region?: string;
    zipcode?: string;
    geo?: Object;
};


export class User{ 
    id: number;
    name:string;
    username:string; 
    email:string;
    address:Address;
    phone:string;
    website:string; 
    company: Object;
    //{ "name":"Romaguera-Crona", "catchPhrase":"Multi-layered client-server neural-net", "bs":"harness real-time e-markets" }
 }