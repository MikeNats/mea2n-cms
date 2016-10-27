import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateToken } from './auth/AuthenticateToken.Service';

@Component({
  selector: '[my-app]',
  template: `<router-outlet></router-outlet>`
})

export class AppComponent{ 
  constructor() {}
 }
