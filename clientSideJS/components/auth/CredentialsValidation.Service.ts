import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import { Headers } from '@angular/http';
import { Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { config } from '../../config/config';
import { requestHeader } from '../../headers/requestHeader';
 
@Injectable()  
export class CredentialsValidation {
  authApi: string;
  
    constructor(private http: Http){}
    setOptions(): RequestOptions {
    	return requestHeader({ 'Content-Type': 'application/json', 'Accept': 'application/json' });
    }
	credentials(username: string, password: string): Observable<Object> {
	    let body = JSON.stringify({ username, password });

	    return this.http.post(config.LOG_IN_URL, body, this.setOptions())
    }
}