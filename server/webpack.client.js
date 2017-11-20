const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const config = {

  // Root file for server application
  entry: './src/client',

  // Set output for bundle
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  }
};

// Export the merged config
module.exports = merge(baseConfig, config);
