import { Component, Directive, ElementRef, Renderer } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, Router } from '@angular/router-deprecated';
import { Http } from '@angular/http';

import { Home } from './home';
import { About } from './about';

/////////////////////////
// ** Example Directive
// Notice we don't touch the Element directly
@Directive({
  selector: '[x-large]'
})
export class XLarge {
  constructor(element: ElementRef, renderer: Renderer) {
    // ** IMPORTANT **
    // we must interact with the dom through -Renderer-
    // for webworker/server to see the changes
    renderer.setElementStyle(element.nativeElement, 'fontSize', 'x-large');
    // ^^
  }
}

/////////////////////////
// ** MAIN APP COMPONENT **
@Component({
  selector: 'app', // <app></app>
  directives: [
    ...ROUTER_DIRECTIVES,
    XLarge
  ],
  styles: [],
  template: `
  <h3 id="universal">Angular2 Universal</h3>
  <nav>
    <a [routerLink]=" ['./Home'] ">Home</a>
    <a [routerLink]=" ['./About'] ">About</a>
  </nav>
  <main>
    <router-outlet></router-outlet>
  </main>
  `
})
@RouteConfig([
  { path: '/', component: Home, name: 'Home', useAsDefault: true },
  { path: '/about', component: About, name: 'About' },
  { path: '/**', redirectTo: ['Home'] }
])
export class App {
  title: string = 'ftw';
  data = {};
  server:string;

  constructor(public http: Http) { }

  ngOnInit() {
    setTimeout(() => {
      this.server = 'This was rendered from the server!';
    }, 10);

    this.http.get('/data.json')
      .subscribe(res => {
        this.data = res.json();
      });
  }

}
