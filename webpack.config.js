const path = require('path')
const {VueLoaderPlugin} = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
  entry: './example/main.js',
  output: {
    path: path.resolve('./dist'),
    filename: "index.js"
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      'vue': 'vue/dist/vue',
      '@': path.resolve(__dirname, './src'),
    }
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: './example/index.html',
      filename: './index.html',
      inject: true,
    })
  ],
  module: {
    rules: [
      {test: /\.js$/, loader: 'babel-loader', exclude: '/node_modules'},
      {test: /\.vue$/, loader: 'vue-loader'},
      {test: /\.css$/, loader: "style-loader!css-loader"},
      {test: /\.(jpe?g|png|gif)$/i, loader: 'url-loader',},
    ]
  },
  devServer: {
    historyApiFallback: true,
    inline: true,
    host: '0.0.0.0',
    port: 7000,
    contentBase: path.join(__dirname, 'dist'),
  },

}

module.exports = config