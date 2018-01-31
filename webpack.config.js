const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const production = process.env.NODE_ENV === 'production';

const configuration = {
  devtool: production ? 'inline-source-map' : 'none',
  entry: { app: resolve('src', 'index.ts') },
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
      template: resolve('src', 'index.html')
    }),
    production ? new webpack.NoEmitOnErrorsPlugin() : null,
    production ? new webpack.optimize.UglifyJsPlugin({ sourceMap: true }) : null
  ].filter(x => x)
};

function resolve(...paths) {
  return path.join(__dirname, ...paths);
}

module.exports = configuration;
