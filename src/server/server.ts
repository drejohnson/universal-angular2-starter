import * as path from 'path';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as morgan from 'morgan';
import * as compression from 'compression';

import { ngApp } from './app';

// Angular 2 Universal
import 'angular2-universal/polyfills';
import { enableProdMode } from 'angular2/core';

// Application
import { App } from '../client/app';

const DEBUG = process.env.NODE_ENV !== 'production';
const PORT = process.env.PORT || 3000;

const app = express();

if (process.env.NODE_ENV === 'production') {
  enableProdMode();
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(compression());
app.use(morgan(DEBUG ? 'dev' : 'combined'));

// Serve static files
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
