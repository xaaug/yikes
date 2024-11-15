const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { watchFile } = require('fs')

module.exports = {
    mode: "development",
    entry: './src/index.js',
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    devtool: "eval-source-map",
    devServer: {
        watchFiles: ['./src/page.html']
    },
    plugins: [
       new HTMLWebpackPlugin({
        template: "./src/page.html"
       })
    ],
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader", "postcss-loader"]
          },
          {
            test: /\.html$/i,
            loader: "html-loader",
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: "asset/resource",
          },
          {
            test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]',
                  outputPath: 'fonts/'
                }
              }
            ]
          }
        ],
      },
}