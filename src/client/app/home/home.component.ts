import { Component } from '@angular/core';

const styles = require('./home.component.css');
const template = require('./home.component.html');

@Component({
  selector: 'home',
  styles: [ styles ],
  template
})
export class Home {

  constructor() {}

  ngOnInit() {
  }

}
