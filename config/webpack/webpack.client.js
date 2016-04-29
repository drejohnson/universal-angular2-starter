const path = require('path');
const webpack = require('webpack');
const assign = require('object-assign');
const COMMON_CONFIG = require('./webpack.common');

const CLIENT_CONFIG = assign({}, COMMON_CONFIG, {
  target: 'web',
	cache: false,
	context: __dirname,
	debug: false,
	devtool: false,
  entry: [],
  output: {},
  plugins: [],
  node: {}
});

// Object.assign(CLIENT_CONFIG, COMMON_CONFIG);

module.exports = CLIENT_CONFIG;
