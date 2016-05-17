import { APP_BASE_HREF } from '@angular/common';
// Angular 2 Http
import { HTTP_PROVIDERS } from '@angular/http';
// Angular 2 Router
import { ROUTER_PROVIDERS } from '@angular/router-deprecated';

export const APPLICATION_PROVIDERS = [
  ...HTTP_PROVIDERS,
  ...ROUTER_PROVIDERS,
  { provide: APP_BASE_HREF, useValue: '/' }
];

export const PROVIDERS = [
  ...APPLICATION_PROVIDERS
];
