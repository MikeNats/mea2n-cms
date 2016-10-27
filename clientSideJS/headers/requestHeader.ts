import { RequestOptions } from '@angular/http';
import { Headers } from '@angular/http';

export const requestHeader = (headers: Object) => 
	new RequestOptions({ headers:  new Headers(headers)})
