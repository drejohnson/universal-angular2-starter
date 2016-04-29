import {BROWSER_ROUTER_PROVIDERS, BROWSER_HTTP_PROVIDERS} from 'angular2-universal';

export const APPLICATION_PROVIDERS = [
  ...BROWSER_HTTP_PROVIDERS,
  ...BROWSER_ROUTER_PROVIDERS
];

export const PROVIDERS = [
  ...APPLICATION_PROVIDERS
];
