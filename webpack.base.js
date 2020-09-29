const webpack = require('webpack');
const path = require('path');

const { DefinePlugin } = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// const TerserPlugin = require('terser-webpack-plugin');
const extendedConfig = require('./webpack.config.extend');

const deploymentRegion = process.env.REGION;
const locale = process.env.LOCALE;
// const [localeRegion] = locale.split('_');
const nodeEnv = process.env.NODE_ENV;
const isProd = nodeEnv === 'production';
const sourceMap = !isProd;

const fromSrc = (dir) => path.join(__dirname, 'src', dir);
const assetsPrefix = 'assets';

const envNames = ['NODE_ENV'].concat(extendedConfig.env);
const envObject = envNames.reduce(
  (acc, key) => ({ ...acc, [key]: JSON.stringify(process.env[key]) }),
  {},
);
const sassEnvs = extendedConfig.env
  .map((e) => `$${e.toLowerCase()}: ${JSON.stringify(process.env[e])};`)
  .concat(`$locales: ${extendedConfig.locales};`)
  .join('');

module.exports = {
  entry: './src/entry-client.js',
  mode: isProd ? 'production' : 'development',
  // devtool: isProd ? false : 'source-map',
  output: {
    path: path.resolve(__dirname, `./dist/${deploymentRegion}`),
    // filename: `${assetsPrefix}/js/${
    //   isProd ? '[name].[contenthash].js' : '[name].bundle.js'
    // }`,
    // filename: '[name].bundle.js',

    publicPath: '/dist/sg/',
    // publicPath: isProd ? './' : '/dist/sg/',
    // publicPath: path.resolve(__dirname, isProd ? `./dist/${deploymentRegion}` : `/dist/${deploymentRegion}`),

    filename: 'build.js',
    // publicPath: '/dist/',
    // publicPath: '/dist/sg', // index.html 接收 client.bundle.js 的 路徑 ?
  },
  optimization: {
  //   splitChunks: { chunks: 'all' },
  },
  
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [fromSrc('.')],
        options: { emitWarnings: false },
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
            // the "scss" and "sass" values for the lang attribute to the right configs here.
            // other preprocessors should work out of the box, no loader config like this necessary.
            'scss': [
              'vue-style-loader',
              'css-loader',
              'sass-loader'
            ],
            'sass': [
              'vue-style-loader',
              'css-loader',
              'sass-loader?indentedSyntax'
            ]
          }
          // other vue-loader options go here
        }
      },
      {
        test: require.resolve('./src/i18n/node'),
        use: [
          {
            loader: 'val-loader',
            options: {
              locales: extendedConfig.locales,
            },
          },
          {
            loader: 'babel-loader',
            options: {
              presets: [['@babel/preset-env', { modules: 'cjs' }]],
            },
          },
        ],
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [path.join(__dirname, 'src')],
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'file-loader',
        options: {
          limit: 1000,
          // outputPath: 'images',
          name: '[name].[ext]?[hash]'
        },
      },
      {
        test: /\.s?css$/,
        use: [
          'vue-style-loader',
          { loader: 'css-loader', options: { sourceMap } },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [
                /* eslint-disable global-require */
                require('postcss-import')(),
                require('autoprefixer')(),
                /* eslint-enable global-require */
              ],
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap,
              data: `
                @import './src/styles/variables.scss';
                @import './src/styles/mixins.scss';
                ${sassEnvs}
              `,
            },
          },
        ],
      },
    ],
  },

  resolve: {
    extensions: ['*', '.js', '.vue', '.json', '.scss'],
    alias: { '@': fromSrc('.') },
  },

  plugins: [
    new DefinePlugin({ 'process.env': envObject }),
    new VueLoaderPlugin(),
  ],

  devServer: {
    historyApiFallback: true,
    overlay: { errors: true },
    proxy:
      nodeEnv === 'linking'
        ? {
            '/api': {
              target: extendedConfig.linkingTarget,
              changeOrigin: true,
            },
          }
        : {},
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map',
};

if (isProd) {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    // new webpack.optimize.UglifyJsPlugin({
    //   sourceMap: true,
    //   compress: {
    //     warnings: false
    //   }
    // }),
    // new webpack.LoaderOptionsPlugin({
    //   minimize: true
    // })
  ])
  // module.exports.plugins.unshift(
  //   new CleanWebpackPlugin([
  //     deploymentRegion ? `dist/${deploymentRegion}` : 'dist',
  //   ]),
  // );
  module.exports.plugins.push(
    new MiniCssExtractPlugin({
      filename: `${assetsPrefix}/css/[name].[contenthash].css`,
      chunkFilename: `${assetsPrefix}/css/[id].[contenthash].css`,
    }),
  );

  // module.exports.optimization.minimizer = [
  //   // new TerserPlugin(),
  //   new OptimizeCSSAssetsPlugin(),
  // ];
}