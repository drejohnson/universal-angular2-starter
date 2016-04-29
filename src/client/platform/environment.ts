// Angular 2 browser
import {
  ELEMENT_PROBE_PROVIDERS,
  ELEMENT_PROBE_PROVIDERS_PROD_MODE
} from 'angular2/platform/browser';

// Angular 2
import {enableProdMode} from 'angular2/core';

// Environment Providers
var PROVIDERS = [];

if ('production' === ENV) {
  // Production
  enableProdMode();
  console.log('App running in Production');
  PROVIDERS = [
    ...PROVIDERS,
    ELEMENT_PROBE_PROVIDERS_PROD_MODE
  ];

} else {
  // Development
  console.log('App running in Development');
  PROVIDERS = [
    ...PROVIDERS,
    ELEMENT_PROBE_PROVIDERS
  ];

}

export const ENV_PROVIDERS = [
  ...PROVIDERS
];
