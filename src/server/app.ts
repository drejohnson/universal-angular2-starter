import 'angular2-universal/polyfills';
import {
  provide,
  enableProdMode,
  REQUEST_URL,
  ORIGIN_URL,
  BASE_URL,
  NODE_ROUTER_PROVIDERS,
  NODE_HTTP_PROVIDERS,
  queryParamsToBoolean,
  Bootloader
} from 'angular2-universal';

import { App } from '../client/app';

export const ngApp = (req, res) => {
  let baseUrl = '/';
  let url = req.originalUrl || '/';

  let queryParams: any = queryParamsToBoolean(req.query);
  let bootloader = new Bootloader({
    template: `
    <!doctype html>
    <html>
      <head>
        <title>Angular 2 Universal Starter</title>
        <meta charset="UTF-8">
        <meta name="description" content="Angular 2 Universal">
        <meta name="keywords" content="Angular 2,Universal">
        <meta name="author" content="PatrickJS">

        <link rel="icon" href="data:;base64,iVBORw0KGgo=">

        <base href="/">
      </head>
      <body>
        <app>... Loading Universal ...</app>
        <script defer src="https://code.getmdl.io/1.1.3/material.min.js"></script>
        <script src="/main.js"></script>
      </body>
    </html>
    `,
    directives: [ App ],
    providers: [
      provide(ORIGIN_URL, {useValue: 'http://localhost:3000'}),
      provide(BASE_URL, {useValue: baseUrl}),
      provide(REQUEST_URL,  { useValue: 'req.originalUrl' }),
      NODE_ROUTER_PROVIDERS,
      NODE_HTTP_PROVIDERS
    ],
    async: queryParams.async === false ? false : true,
    preboot: queryParams.preboot === false ? null : {debug: true, uglify: false}
  });

  bootloader.serializeApplication()
    .then(html => res.send(html));
};
