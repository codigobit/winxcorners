const webpack = require('webpack')
const path = require('path')

module.exports = {
  devtool: 'eval-source-map',
  entry: ['index.tsx'],
  output: {
    filename: 'app.js',
    publicPath: 'dist',
    path: path.resolve('dist')
  },
  devServer: {
    port: 3000,
    historyApiFallback: true,
    inline: true,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    modules: ['src', 'node_modules']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /(node_modules)/,
        loaders: ['babel-loader', 'ts-loader'],
        include: path.resolve('src')
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader'
          }
        ]
      },
      {
        test: /\.(woff|woff2|ttf|eot|svg)$/,
        loader: 'file-loader?name=fonts/[name].[ext]'
      }
    ]
  }
}