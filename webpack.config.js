var webpack = require('webpack')

module.exports = {
  entry: './src/main.js',
  output: {
    path: './build',
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /src\/.+\.js$/,
        loader: 'babel?presets[]=es2015'
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file?name=[name].[ext]?[hash]'
      }
    ]
  }
}

if (process.env.NODE_ENV === 'production') {
  module.exports.plugins = [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin()
  ]
} else {
  module.exports.devtool = '#source-map'
  module.exports.devServer.host = '0.0.0.0'
}
