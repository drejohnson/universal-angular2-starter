import {Component, OnInit} from 'angular2/core';

const styles = require('./home.component.css');
const template = require('./home.component.html');

@Component({
  selector: 'home',
  styles: [ styles ],
  template
})
export class Home implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
