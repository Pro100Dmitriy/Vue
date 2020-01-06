const path = require('path')
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
 
    mode: 'development',
    devtool: 'source-map',
    optimization: {
        minimize: false,
    },
    context: path.resolve(__dirname, 'src'),
    entry:{
        out: './main.js',
    },

    output: {
        filename: 'outjs.js',
        path: path.resolve(__dirname, 'dist')
    },

    plugins: [
        new htmlWebpackPlugin({
            title: 'Vue_basic',
            hash: true,
            template: './index.html'
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
        hot: true,
    }

}