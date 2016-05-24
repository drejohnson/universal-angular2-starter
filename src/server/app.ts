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
    provide(BASE_URL, {useValue: '/'})
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
