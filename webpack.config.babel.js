import path from 'path';

export default {
  entry: './src/index.js',
  output: {
    path: __dirname,
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
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}
