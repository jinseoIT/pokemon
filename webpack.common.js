const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'none',
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
      assetModuleFilename: './src/assets/[hash][ext][query]',
      publicPath: '/pokemon/'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        },
        {
          test: /\.(jpg|jpeg|gif|png|svg|ico)?$/,
          use: {
            loader: "url-loader",
            options: {
              limit: 10000,
              fallback: "file-loader",
              name: "[name].[ext]?[hash]",
              outputPath: "assets",
            },
          },
        },
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({   // index.html 템플릿을 기반으로 빌드 결과물을 추가해줌
        template: './index.html',
        baseUrl: process.env.NODE_ENV == 'development'?'/':'/pokemon/'
        // filename: "index.html",
        // template: path.resolve(__dirname, "./public/index.html"),
      }),
    ],
}