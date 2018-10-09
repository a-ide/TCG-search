module.exports = {
  mode: 'development',
  target: 'web',
  entry: './src/index.js',
  output: {
    filename: 'main.js'
  },
  devServer: {
    contentBase: 'dist',
    open: true,
    port: 3000
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              'env',
              'react'
            ]
          }
        }
      }, {
        test: /\.scss$/,
        use: [
          'style-loader',
          {loader: 'css-loader'},
          {loader: 'sass-loader'}
        ]
      }
    ]
  }
}
