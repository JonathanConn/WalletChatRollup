const webpack = require('webpack');

const port = process.env.PORT || 3000;

module.exports = {
  // Webpack configuration goes here
    mode: 'development',
    entry: './src/pages/_app.tsx',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.[fullhash].js'
    },
    devtool: 'inline-source-map',

};