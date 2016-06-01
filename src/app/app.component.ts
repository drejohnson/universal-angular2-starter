import { Component, Directive, ElementRef, Renderer } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, Router } from '@angular/router-deprecated';
import { Http } from '@angular/http';

import { HomeComponent } from './home';
import { AboutComponent } from './about';

@Component({
  selector: 'app',
  directives: [
    ...ROUTER_DIRECTIVES
  ],
  styles: [],
  template: `
  <h1>{{ title }}</h1>
  <nav>
    <a [routerLink]=" ['./Home'] ">Home</a>
    <a [routerLink]=" ['./About'] ">About</a>
  </nav>
  <main>
    <router-outlet></router-outlet>
    <p>{{ server }}</p>
    <pre>{{ data | json }}</pre>
  </main>
  `
})
@RouteConfig([
  { path: '/', component: HomeComponent, name: 'Home', useAsDefault: true },
  { path: '/about', component: AboutComponent, name: 'About' },
  { path: '/**', redirectTo: ['Home'] }
])
export class App {
  title = 'Angular 2 Universal';
  data = {};
  server: string;

  constructor(public http: Http) { }

  ngOnInit() {
    console.log('Angular 2 Universal + Webpack 2');
    setTimeout(() => {
      this.server = 'This was rendered from the server!';
    }, 10);

    this.http.get('/data.json')
      .subscribe(res => {
        this.data = res.json();
      });
  }

}
