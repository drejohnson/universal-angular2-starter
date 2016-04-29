const path = require('path');
const webpack = require('webpack');
const assign = require('object-assign');
const COMMON_CONFIG = require('./webpack.common');

const SERVER_CONFIG = assign({}, COMMON_CONFIG, {
  target: 'node',
	cache: false,
	context: __dirname,
	debug: false,
	devtool: false,
  entry: [],
  output: {},
  plugins: [],
  node: {}
});

// Object.assign(SERVER_CONFIG, COMMON_CONFIG);

module.exports = SERVER_CONFIG;
