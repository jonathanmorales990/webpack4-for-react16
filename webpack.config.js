const webpack = require('webpack')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = env => {
    return {
        entry: './src/index.jsx',
        output: {
            path: __dirname + '/build',
            filename: '[name].js',
            chunkFilename: '[name].js'
        },
        devServer: {
            port: 8080,
            contentBase: './build',
        },
        resolve: {
            extensions: ['*', '.js', '.jsx'],
            alias: {
                modules: __dirname + '/node_modules',
            }
        },
        plugins: [ 
            new MiniCssExtractPlugin({
              filename: '[name].css',
              chunkFilename: '[id].css',
            })
        ],
        module: {
            rules: [{
                test: /.js[x]?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react'],
                    plugins: ['transform-object-rest-spread']
                }
            },{
                test: /\.(sa|sc|c)ss$/,
                loader: [
                    env !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },{
                test: /\.woff|.woff2|.ttf|.eot|.svg|.png|.jpg*.*$/,
                loader: 'file-loader',
                options: {
                    outputPath: 'media/'
                }
            }]
        }
    }
}