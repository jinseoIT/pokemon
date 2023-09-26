const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'none',
    entry: '/src/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'docs'),
      publicPath: '/',
    },
    devServer: {
      port: 3000,
      hot: true,
      compress: true,
      // historyApiFallBack: 히스토리 API를 사용하는 SPA 개발시 설정한다. 404가 발생하면 index.html로 리다이렉트한다.
      historyApiFallback: true,
    },
    module: {
      rules: [
        // CSS 파일 로더 설정
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader']
        },
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
              outputPath: "img",
              publicPath: "../img",
            },
          },
        },
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({   // index.html 템플릿을 기반으로 빌드 결과물을 추가해줌
        filename: "index.html",
        template: path.resolve(__dirname, "./public/index.html"),
      }),
    ],
}