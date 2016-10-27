import { NgModule }      from '@angular/core';
import { PageStractureComponent }   from './PageStracture.Component';
import { AsidePanelModule }   from './asidePanel/AsidePanel.Module';
import { MainPanelModule }   from './mainPanel/MainPanel.Module';
import { AuthModule }   from '../auth/Auth.Module';

@NgModule({   
  imports:[AsidePanelModule, MainPanelModule, AuthModule],
  declarations: [PageStractureComponent],  
  exports: [PageStractureComponent]
})

export class PageStractureModule { }   
