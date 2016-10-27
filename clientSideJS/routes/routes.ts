import { AuthenticateToken}   from '../components/auth/AuthenticateToken.Service';
import { LogInComponent }   from '../components/auth/LogIn.component';
import { PageStractureComponent }   from '../components/pageStracture/PageStracture.Component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    component: LogInComponent,
    resolve: [AuthenticateToken]
  },
  {  
    path: 'panel',
    component: PageStractureComponent,
    canActivate: [AuthenticateToken],
    data: { 
      title: 'Pages',
      testMenu: ['test1', 'test2', 'test3', 'test4']
    }
  }
]
  
