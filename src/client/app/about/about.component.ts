import { Component } from '@angular/core';

const styles = require('./about.component.css');
const template = require('./about.component.html');

@Component({
  selector: 'about',
  styles: [ styles ],
  template
})
export class AboutComponent {

  constructor() {}

  ngOnInit() {
  }

}
