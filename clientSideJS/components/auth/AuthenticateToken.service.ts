import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Resolve } from '@angular/router';
import { Injectable } from "@angular/core";
import { Http, Response, RequestOptions } from '@angular/http';
import { Observable } from "rxjs/Rx"; 
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { config } from '../../config/config';
import { requestHeader } from '../../headers/requestHeader';

interface RouteProperties extends CanActivate, Resolve <any> {
}

@Injectable()
export class AuthenticateToken implements RouteProperties {
  options: RequestOptions;
  token: string
 
  constructor(private http: Http, private router: Router) { 
    this.options = requestHeader({ 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });  
  } 
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.authToken().map((auth) => {
      if (!auth.json().success) {
        console.log('!canActivate')
        this.router.navigateByUrl(''); 

        return false;
      }
      return true;
    });
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.authToken().map((auth) => {
      if (auth.json().success) { 
        this.router.navigateByUrl('panel'); 

        return false;
      }
      return true;
    });
  }
  authToken(): Observable<any> {  
    return this.http.post(config.AUTH, { token: this.getTokenFromLocalStorage() }, this.options);
  }
  getTokenFromLocalStorage(): string {
    return window.localStorage.getItem(config.LOCAL_STORAGE.prefix)
  }
  storeToken(token: string): void {
    window.localStorage.setItem(config.LOCAL_STORAGE.prefix, token)
  }
}
