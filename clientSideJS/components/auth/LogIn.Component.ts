import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from "@angular/common";
import { CredentialsValidation }   from './CredentialsValidation.Service';
import { AuthenticateToken } from './AuthenticateToken.Service';

@Component({
  selector: 'log-in',
  template: `
    <section id="logIn" class="alignObject columns large-8 medium-12 small-14">
      <form (submit)="userValidation($event, username.value, password.value)">
        <fieldset>
          <input type="text" (keydown)="removeErrorClass($event)" #username [ngClass]="{'error': error }" placeholder="User name" />
        </fieldset>

        <fieldset>
          <input type="password" #password [ngClass]="{'error': error }" placeholder="Password" />
        </fieldset>
        
        <button type="submit" class="button columns large-16" >Submit</button>
      </form>
    </section>` ,
  providers: [CredentialsValidation, AuthenticateToken]
}) 

export class LogInComponent{
  error: Boolean; // marks UI fields 

  constructor(private validation: CredentialsValidation, private router: Router, private authenticateToken: AuthenticateToken, private location: Location) {
    this.error = false;
  }

  removeErrorClass(event: any){
    if (event.target.className === 'error') {
      event.target.className = '';
    }   
  }
  userValidation(event: any, username: string, password: string) { 
    event.preventDefault();

    this.validation.credentials(username, password)
      .subscribe((user) => this.logInSucsess(user), () => this.logInFail()
    );
  }
  logInSucsess(user: any) {
    this.error = false; //remove error class
    this.authenticateToken.storeToken(user.json().token); // store token
    this.router.navigateByUrl('panel'); // redire   
  }
  logInFail() {
    this.error = true; 
  }
}

