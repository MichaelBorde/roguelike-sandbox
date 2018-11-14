const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const mode = process.env.NODE_ENV || 'development';
const production = mode === 'production';

const configuration = {
  mode,
  devtool: production ? 'inline-source-map' : 'none',
  entry: { app: resolve('app', 'index.ts') },
  output: {
    path: resolve('build'),
    filename: production ? '[name].[hash].bundle.js' : '[name].bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [{ loader: 'ts-loader' }]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: { sourceMap: true }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve('app', 'index.html')
    }),
    production ? new webpack.NoEmitOnErrorsPlugin() : null,
    production ? new UglifyJsPlugin({ sourceMap: true }) : null
  ].filter(x => x)
};

function resolve(...paths) {
  return path.join(__dirname, ...paths);
}

module.exports = configuration;
