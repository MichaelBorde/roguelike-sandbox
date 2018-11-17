const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const configuration = {
  entry: { app: resolve('app', 'index.ts') },
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
    })
  ]
};

function resolve(...paths) {
  return path.join(__dirname, ...paths);
}

module.exports = configuration;
