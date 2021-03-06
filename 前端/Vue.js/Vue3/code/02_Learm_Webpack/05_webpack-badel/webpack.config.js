const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { DefinePlugin } = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'js/bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        type: 'asset',
        generator: {
          filename: 'img/[name]_[hash:6][ext]'
        },
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024
          }
        }
      },
      {
        test: /\.(eot|ttf|woff2?)$/,
        type: 'asset/resource',
        generator: {
          filename: 'font/[name]_[hash:6][ext]'
        }
      },
      // {
      // 	test: /\.js$/,
      // 	use: {
      // 		loader: 'babel-loader',
      // 		// 配置信息
      // 		options: {
      // 			// plugins: [
      // 			// 	'@babel/plugin-transform-arrow-functions',
      // 			// 	'@babel/plugin-transform-block-scoping',
      // 			// ]
      // 			presets: [
      // 				'@babel/preset-env'
      // 			]
      // 		}
      // 	}
      // }
      {
        test: /\.js$/,
        loader: 'babel-loader' // 使用babel.config.js配置文件
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      title: '哈哈哈'
    }),
    new DefinePlugin({
      BASE_URL: '"./"'
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: './public',
          to: './',
          globOptions: {
            ignore: ['**/index.html']
          }
        }
      ]
    })
  ]
}
