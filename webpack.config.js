var path = require('path');

module.exports = {
  entry: './src/core/index.js',
  output: {
    path: './target/',
    filename: 'index.js'
  },
  devServer: {
    inline: true,
    port: 8005
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  resolve: {
    root: [path.resolve(__dirname, 'src/core'), path.resolve(__dirname, 'src/test')],
    extensions: ["", ".js", ".jsx"]
  }
}
