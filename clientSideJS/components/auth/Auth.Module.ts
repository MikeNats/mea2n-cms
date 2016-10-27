import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogInComponent }   from './LogIn.Component';

@NgModule({
  imports: [CommonModule],
  declarations: [LogInComponent],
  exports: [LogInComponent] 
})

export class AuthModule { } 
