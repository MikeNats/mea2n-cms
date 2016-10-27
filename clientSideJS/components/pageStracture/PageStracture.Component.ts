import { Component } from '@angular/core'; 

@Component({
  selector: 'page-stracture',
  template: `
  	<aside  aside-panel id="asideAside" class='columns large-2 medium-3 small-6'></aside>
  	<section main-panel id="panel" class='columns large-14 medium-13 small-10' ></section>
  `
}) 

export class PageStractureComponent {
  constructor() {}
}

