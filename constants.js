/// <reference path="typings/index.d.ts" />

const fs = require('fs');
const path = require('path');

exports.ROOT_DIR = path.resolve(__dirname);
exports.SRC_DIR = path.resolve(exports.ROOT_DIR, 'src');
exports.DIST_DIR = path.resolve(exports.ROOT_DIR, 'dist');
exports.CLIENT_DIR = path.resolve(exports.DIST_DIR, 'client');
exports.SERVER_DIR = path.resolve(exports.DIST_DIR, 'server');

exports.ENV = process.env.NODE_ENV || 'development';
exports.DEBUG = process.env.NODE_ENV !== 'production';
exports.HOST = process.env.HOST || 'localhost';
exports.PORT = +process.env.PORT || 8080;
exports.PROTOCOL = process.env.PROTOCOL || 'http';

exports.HAS_SS = 'UNIVERSAL' in process.env ? process.env.UNIVERSAL === 'true' : true;

exports.VENDOR_NAME = 'vendor';
exports.SERVER_NAME = 'server';
exports.CLIENT_NAME = 'main';

exports.SERVER_SOURCE_PATH = path.resolve(exports.SRC_DIR, 'server/index.ts');
exports.VENDOR_SOURCE_PATH = path.resolve(exports.SRC_DIR, 'vendor.ts');
exports.CLIENT_SOURCE_PATH = path.resolve(exports.SRC_DIR, 'main.browser.ts');

exports.PREBOOT = {
  appRoot: 'app',
  freeze:  { name: 'spinner' },
  replay:  'rerender',
  buffer:  true,
  debug:   true,
  uglify:  false,
};


