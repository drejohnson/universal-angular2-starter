import * as path from 'path';
import * as express from 'express';
import * as bodyParser from 'body-parser';

import { ngApp } from './app'

// Angular 2 Universal
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

// Application
import {App} from '../client/app';

const app = express();
const ROOT = path.join(path.resolve(__dirname, '../..'));

enableProdMode();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files
// app.use(express.static(ROOT, {index: false}));
app.use(express.static('dist/client'));

// Our API for demos only
app.get('/data.json', (req, res) => {
  res.json({
    data: 'This fake data came from the server.'
  });
});

// Routes with html5pushstate
app.use('/', ngApp);
app.use('/about', ngApp);

// Server
app.listen(3000, () => {
  console.log('Listening on: http://localhost:3000');
});
