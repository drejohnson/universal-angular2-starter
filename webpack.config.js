const fs                  = require('fs');
const path                = require('path');
const webpack             = require('webpack');
const webpackMerge        = require('webpack-merge');
const CompressionPlugin   = require('compression-webpack-plugin');
const CopyWebpackPlugin   = require('copy-webpack-plugin');
const constants           = require('./constants');

// Constants
const ROOT_DIR    = constants.ROOT_DIR;
const SRC_DIR     = constants.SRC_DIR;
const CLIENT_DIR  = constants.CLIENT_DIR;
const SERVER_DIR  = constants.SERVER_DIR;

// const POLYFILLS_NAME = constants.POLYFILLS_NAME;
const VENDOR_NAME    = constants.VENDOR_NAME;
const SERVER_NAME    = constants.SERVER_NAME;
const CLIENT_NAME    = constants.CLIENT_NAME;

// const POLYFILLS_SOURCE_PATH = constants.POLYFILLS_SOURCE_PATH;
const VENDOR_SOURCE_PATH    = constants.VENDOR_SOURCE_PATH;
const SERVER_SOURCE_PATH    = constants.SERVER_SOURCE_PATH;
const CLIENT_SOURCE_PATH    = constants.CLIENT_SOURCE_PATH;

// Node Environment
const ENV = constants.ENV;
const DEBUG = constants.DEBUG;

// Node Modules
const NODE_MODULES = fs.readdirSync(ROOT_DIR + '/node_modules').filter((name) => {
  return name != '.bin';
});

// Client Only Loaders
const CLIENT_LOADERS = [{
  test: /\.css$/,
  loader: 'to-string!css!postcss'
}, {
  test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
  loader: 'url',
  query: { limit: 10000 }
}];

// Common Loaders
const LOADERS = [{
  test: /\.ts$/,
  loader: 'ts',
  exclude: [
    /\.(spec|e2e)\.ts$/,
    /node_modules/
  ]
}, {
  test: /\.html$/,
  loader: 'raw'
}, {
  test: /\.json$/,
  loader: 'json'
}, {
  test: /\.css$/,
  loader: 'to-string!css!postcss'
}, {
  test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
  loader: 'url',
  query: { limit: 10000 }
}];

// PostCSS
const AUTOPREFIXER_BROWSERS = [
  'last 2 versions'
];

const POSTCSS = function() {
  return [
    require('postcss-partial-import'),
    require('postcss-nested'),
    require('postcss-mixins'),
    require('lost')(),
    require('postcss-cssnext')({
      browsers: AUTOPREFIXER_BROWSERS
    })
  ]
}

// Common Plugins
const COMMOM_PLUGINS = [
  new webpack.DefinePlugin({
    'process.env': {
      ENV: JSON.stringify(ENV),
      NODE_ENV: JSON.stringify(ENV)
    }
  }),
  ...DEBUG ? [] : [
    // production
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: {
        screw_ie8 : true,
        keep_fnames: true
      },
      compress: {
        screw_ie8: true,
        warnings: false
      },
      output: {
        comments: false
      },
      sourceMap: false
    }),
    new CompressionPlugin({
      regExp: /\.css$|\.html$|\.js$|\.map$/,
      threshold: 2 * 1024
    })
  ]
];

const COMMON_CONFIG = {
  devtool: DEBUG ? 'cheap-module-source-map' : false,
  cache: DEBUG,
  debug: DEBUG,
  context: __dirname,
  resolve: {
    extensions: ['', '.ts', '.js'],
    root: SRC_DIR
  },
  module: {
    noParse: [
      path.join(__dirname, 'zone.js', 'dist'),
      path.join(__dirname, 'angular2', 'bundles')
    ],
    loaders: LOADERS
  }
};

const CLIENT_CONFIG = {
  target: 'web',
  entry: {
    [VENDOR_NAME]: VENDOR_SOURCE_PATH,
    [CLIENT_NAME]: CLIENT_SOURCE_PATH
  },
  output: {
    path: CLIENT_DIR,
    filename: '[name].js',
    chunkFilename: '[id].[name].js',
  },
  plugins: [
    ...COMMOM_PLUGINS,
    new CopyWebpackPlugin([{
      from: '../assets',
      to: 'assets'
    }])
  ],
  node: {
    global: true,
    __dirname: true,
    __filename: true,
    process: true,
    Buffer: false
  }
};


const SERVER_CONFIG = {
  target: 'node',
  entry: {
    [SERVER_NAME]: SERVER_SOURCE_PATH
  },
  output: {
    path: SERVER_DIR,
    filename: '[name].js',
    chunkFilename: '[id].' + SERVER_NAME + '.js',
    library: SERVER_NAME,
    libraryTarget: 'commonjs2'
  },
  plugins: [
    ...COMMOM_PLUGINS,
  ],
  externals: [
    NODE_MODULES.map(function(name) { return new RegExp('^' + name) }),
  ],
  node: {
    global: true,
    __dirname: true,
    __filename: true,
    process: true,
    Buffer: true
  }
};

module.exports = [
  // Client
  webpackMerge({}, COMMON_CONFIG, CLIENT_CONFIG),

  // Server
  webpackMerge({}, COMMON_CONFIG, SERVER_CONFIG)
];
