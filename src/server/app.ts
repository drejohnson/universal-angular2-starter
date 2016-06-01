// Angular 2 Universal
import 'angular2-universal/polyfills';
import {
  provide,
  enableProdMode,
  expressEngine,
  REQUEST_URL,
  ORIGIN_URL,
  BASE_URL,
  NODE_ROUTER_PROVIDERS,
  NODE_HTTP_PROVIDERS,
  Bootloader
} from 'angular2-universal';

import { App } from '../app';

const bootloader = new Bootloader({
  platformProviders: [
    provide(ORIGIN_URL, { useValue: 'http://localhost:3000' }),
    provide(BASE_URL, { useValue: '/' })
  ],
  async: true,
  preboot: false
});

export function ngApp(req, res) {
  const url = req.originalUrl || '/';

  const APP_CONFIG = {
    template: `
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Angular 2 Universal Starter</title>
        <meta name="description" content="Angular 2 Universal">
        <meta name="keywords" content="Angular 2, Universal, Webpack">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="icon" type="image/x-icon" href="assets/icon/favicon.ico">

        <base href="/">
      </head>
      <body>
        <app>... Loading Universal ...</app>
        <script src="vendor.js"></script>
        <script src="main.js"></script>
      </body>
    </html>
    `,
    directives: [App],
    providers: [
      provide(REQUEST_URL, {useValue: url}),
      ...NODE_ROUTER_PROVIDERS,
      ...NODE_HTTP_PROVIDERS
    ]
  };

  bootloader.serializeApplication(APP_CONFIG)
  .then(html => res.send(html));
};
