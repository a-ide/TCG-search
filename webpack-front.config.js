const MODE = 'production'
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
  mode: MODE,
  devtool: 'source-map',
  target: 'web',
  "performance": {
    hints: false
  },
  entry: './src/index.jsx',
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
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  "env",
                  {
                    "targets": {
                      "node": "current"
                    }
                  }
                ],
                'react'
              ]
            }
          },
          {loader: 'eslint-loader'}
        ]
      }, {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: false,
              sourceMap: true,
              minimize: true,
              importLoaders: 2
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins: [
                require('autoprefixer')({ grid: true })
              ]
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new StyleLintPlugin(),
  ],
}
