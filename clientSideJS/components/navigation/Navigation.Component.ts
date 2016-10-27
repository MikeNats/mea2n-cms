import { Component } from '@angular/core'; 
import { routes }   from '../../routes/routes';

@Component({
  selector: '[main-nav]',
  template: `
      <ul> 
        <li *ngFor="let route of routes" >
          <a title="{{route}}" class="button" [routerLink]="['panel']" >{{route}}</a>
        </li>
      </ul>
    `
})   
   
export class NavigationComponent {
   routes: any;

  constructor() {
    this.routes = [].concat.apply([], 
      routes.filter((route: any) => route.path === 'panel')
        .map((route: any) => route.data.testMenu)
        .map((menuItem: string) => menuItem)
    ); 
  }
}  
 

