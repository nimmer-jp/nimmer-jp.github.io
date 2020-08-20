const path = require('path');
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin;
//const minifyCss = require('mini-css-extract-plugin').loader;

const is_prod =
  process.argv.includes('--production') || process.argv.includes('-p');

module.exports = {
  mode: is_prod ? 'production' : 'development',
  entry: {
    main: path.resolve(__dirname, 'src/index.tsx'),
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'assets/js/[name].bundle.js',
    chunkFilename: 'assets/js/[id].chunk.js',
    sourceMapFilename: 'assets/[ext]/[file].map',
    publicPath: '/',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      { test: /\.tsx?$/, use: 'ts-loader' },
      {
        test: /\.s[ac]ss$/,
        use: ['style-loader', /*minifyCss,*/ 'css-loader', 'sass-loader'],
      },
      { test: /\.html$/, use: 'html-loader' },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [
      '.ts',
      '.json',
      '.tsx',
      '.scss',
      '.sass',
      '.css',
      '.mjs',
      '.cjs',
      '.js',
    ],
    modules: ['node_modules'],
  },
  performance: {
    hints: 'warning',
    maxAssetSize: 200000,
    maxEntrypointSize: 400000,
    assetFilter: function (assetFilename) {
      return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
    },
  },
  devtool: 'source-map',
  context: __dirname,
  target: 'web',
  stats: 'errors-only',
  devServer: {
    watchContentBase: true,
    contentBase: path.join(__dirname, 'public'),
    inline: true,
    progress: true,
    compress: true,
    historyApiFallback: true,
    hot: true,
    hotOnly: true,
    host: '0.0.0.0',
    port: 9000,
  },
  optimization: {
    minimize: is_prod,
    minimizer: [new TerserPlugin({ test: /\.js(\?.*)?$/i, sourceMap: false })],
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: path.join(__dirname, 'public') }],
    }),
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development',
      DEBUG: false,
    }),
    new HtmlPlugin({
      inlineSource: '.js$',
      template: path.join(__dirname, 'src/index.html'),
      inject: true,
      minify: is_prod
        ? {
            removeComments: true,
            collapseWhitespace: true,
            removeRedundantAttributes: true,
            useShortDoctype: true,
            removeEmptyAttributes: true,
            removeStyleLinkTypeAttributes: true,
            keepClosingSlash: true,
            minifyJS: true,
            minifyCSS: true,
            minifyURLs: true,
          }
        : undefined,
    }),
    new CleanWebpackPlugin(),
    !is_prod && new webpack.HotModuleReplacementPlugin(),
  ].filter((it) => it),
};
