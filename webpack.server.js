const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');

// const HtmlWebpackPlugin = require('html-webpack-plugin');
const base = require('./webpack.base');
// const deploymentRegion = process.env.REGION;

// eslint-disable-next-line import/no-extraneous-dependencies
const nodeExternals = require('webpack-node-externals');
// eslint-disable-next-line import/no-unresolved
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

// const isProd = process.env === 'production';

module.exports = merge(base, {
  target: 'node', // 服务端打包好的 JS 是给node使用   // in order to ignore built-in modules like path, fs, etc.
  entry: {
    server: './src/entry-server.js',
  },
  devtool: false,
  output: {
    filename: '[name].bundle.js',
    libraryTarget:'commonjs2' //  指定导出方式
  },
  externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
  // externals: Object.keys(require('./package.json').dependencies),
  plugins: [
    new webpack.DefinePlugin({
        'process.env': 'production'
    }),
  ],
  // optimization: {
  //   minimizer: [
  //     new UglifyJsPlugin({
  //       uglifyOptions: {
  //         output: {
  //           comments: false
  //         },
  //         minify: {},
  //         compress: {
  //             booleans: true,
  //         }
  //       }
  //     })
  //   ]
  // }
})