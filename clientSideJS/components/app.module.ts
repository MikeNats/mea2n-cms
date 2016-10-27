import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { AppComponent }   from './app.component';
import { AuthenticateToken }   from './auth/AuthenticateToken.Service';
import { PageStractureModule }   from './pageStracture/pageStracture.Module';
import { routes }   from '../routes/routes';
import { config }  from '../config/config'; 
// import { NgReduxModule, NgRedux } from 'ng2-redux';
// import reduxLogger from 'redux-logger'; 
// import { rootReducer } from './reducers'; 
    
   
// interface AppSate { /* ... */ };
@NgModule({
  imports:[   
	  BrowserModule, FormsModule, HttpModule, CommonModule,
	  PageStractureModule,
	  RouterModule.forRoot(routes, { useHash: true })
  ],//NgReduxModule
  declarations: [ AppComponent],
  bootstrap:    [ AppComponent ],
  providers: [ AuthenticateToken ]

})

export class AppModule { 
  // constructor(ngRedux: NgRedux<AppSate>) {
  //   ngRedux.configureStore(rootReducer, {}, [ createLogger() ]);
  // }
}
 
