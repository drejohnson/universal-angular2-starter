const fs = require('fs');
const path = require('path');

exports.ROOT_DIR = path.resolve(__dirname);
exports.SRC_DIR = path.resolve(exports.ROOT_DIR, 'src');
exports.DIST_DIR = path.resolve(exports.ROOT_DIR, 'dist');
exports.CLIENT_DIR = path.resolve(exports.DIST_DIR, 'client');
exports.SERVER_DIR = path.resolve(exports.DIST_DIR, 'server');

exports.HOST = process.env.HOST || 'localhost';
exports.PORT = +process.env.PORT || 8080;

exports.VENDOR_NAME    = 'vendor';
exports.SERVER_NAME    = 'server';
exports.CLIENT_NAME    = 'main';

exports.SERVER_SOURCE_PATH     = path.resolve(exports.SRC_DIR, 'server/server.ts');
exports.VENDOR_SOURCE_PATH     = path.resolve(exports.SRC_DIR, 'client/vendor.ts');
exports.CLIENT_SOURCE_PATH     = path.resolve(exports.SRC_DIR, 'client/main.browser.ts');


// exports.PREBOOT = {
//   appRoot: 'app',
//   freeze:  { name: 'spinner' },
//   replay:  'rerender',
//   buffer:  true,
//   debug:   true,
//   uglify:  false,
// };

exports.PREBOOT = {
  appRoot: 'app'
}


