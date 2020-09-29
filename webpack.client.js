const webpack = require('webpack');
const path = require('path');
const resolve = dir => path.resolve(__dirname, dir);
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const extendedConfig = require('./webpack.config.extend');

const locale = process.env.LOCALE;
const [localeRegion] = locale.split('_');
const base = require('./webpack.base');
const isProd = process.env.NODE_ENV === 'production';
const deploymentRegion = process.env.REGION;
const assetsPrefix = 'assets';

module.exports = merge(base, {
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve('./index.ssr.html'),
      filename: 'index.ssr.html',
      inject: true,
      minify: isProd
        ? {
            removeComments: false,
            collapseWhitespace: false,
            removeAttributeQuotes: false,
          }
        : false,
      gaId: isProd ? extendedConfig.gaId : '',
      language: locale,
      region: localeRegion,
    })
  ],
});

if (isProd) {
  module.exports.plugins.unshift(
    new CleanWebpackPlugin([
      deploymentRegion ? `dist/${deploymentRegion}` : 'dist',
    ]),
  );
  // module.exports.plugins.push(
  //   new MiniCssExtractPlugin({
  //     filename: `${assetsPrefix}/css/[name].[contenthash].css`,
  //     chunkFilename: `${assetsPrefix}/css/[id].[contenthash].css`,
  //   }),
  // );

  // module.exports.optimization.minimizer = [
  //   new TerserPlugin(),
  //   new OptimizeCSSAssetsPlugin(),
  // ];
}