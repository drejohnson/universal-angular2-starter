import 'angular2-universal/polyfills';

import {bootstrap, enableProdMode, BROWSER_ROUTER_PROVIDERS, BROWSER_HTTP_PROVIDERS} from 'angular2-universal';

import {App} from './app';

enableProdMode();

export function main() {
  bootstrap(App, [
    ...BROWSER_ROUTER_PROVIDERS,
    ...BROWSER_HTTP_PROVIDERS
  ]);
}

export function bootstrapDomReady() {
  // bootstrap after document is ready
  document.addEventListener('DOMContentLoaded', main);
};

bootstrapDomReady();
