import { NgModule }      from '@angular/core';
import { RouterModule } from '@angular/router';
import { AsidePanelComponent }   from './AsidePanel.Component';
import { NavigationModule }   from '../../navigation/Navigation.Module';

@NgModule({  
  imports:[NavigationModule, RouterModule],
  declarations: [AsidePanelComponent],  
  exports: [AsidePanelComponent]
})

export class AsidePanelModule { }   
