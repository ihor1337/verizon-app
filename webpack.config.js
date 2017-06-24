/**
 * Created by Ihor on 6/23/2017.
 */
const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const autoprefixer = require('autoprefixer')


module.exports = {
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          'ng-annotate-loader',
          {
            loader: 'babel-loader',
            options: {
              presets: ['es2015']
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        exclude: /(node_modules|bower_components)/,
        loader: ExtractTextPlugin.extract('css-loader!sass-loader!postcss-loader')
      },
      {
        test: /\.html$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'raw-loader'
      },
      {
        test: /\.(png|jpe?g)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'url-loader'
      }
    ]
  },
  context: path.resolve(__dirname, './app/'),
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/build'
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'app.css',
      allChunks: true
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [autoprefixer()]
      }
    })
  ],
  devServer: {
    contentBase: './'
  },
  devtool: 'cheap-eval-source-map'
}