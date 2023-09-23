const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'none',
    entry: '/src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
      },
      devServer: {
        port: 3000,
      },
      plugins: [
        new HtmlWebpackPlugin({
          // index.html 템플릿을 기반으로 빌드 결과물을 추가해줌
          template: 'index.html',
        }),
      ],
}