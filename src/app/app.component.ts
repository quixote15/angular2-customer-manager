import { Component } from '@angular/core';

import {Customer} from './model';
//This is another painter decorator
//it says: Hey AppComponent everybody in the html world will now call you my-app
//and when they call you in the html world you respond showing your template
@Component({
  moduleId: module.id, //to locate relative or no relative paths
  selector: 'my-app',
  templateUrl: './app.component.html',
 
})

//if we don't export this class no one will be able to see its magic powers
// therefore there is no way to import it
export class AppComponent  { }
