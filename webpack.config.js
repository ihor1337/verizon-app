/**
 * Created by Ihor on 6/23/2017.
 */
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

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
        loader: ExtractTextPlugin.extract('css-loader!sass-loader')
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
    })
  ],
  devServer: {
    contentBase: './'
  },
  devtool: 'cheap-eval-source-map'
}