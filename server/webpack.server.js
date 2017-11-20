const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const webpackNodeExternals = require('webpack-node-externals');

const config = {

  // Set target to Node instead of default Browser
  target: 'node',

  // Root file for server application
  entry: './src/index.js',

  // Set output for bundle
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },

  // Tell webpack to exclude external libraries from
  // bundle.js if the library exists in /node_modules
  // therefore reducing bundle size
  externals: [
    webpackNodeExternals()
  ]
};

// Export the merged config
module.exports = merge(baseConfig, config);
