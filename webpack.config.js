var path = require('path');
var dist = path.resolve(__dirname, 'dist/');

var htmlWebpackPlungin = require('html-webpack-plugin');
var webpack = require('webpack');
var less = require('less');
// var sass = require('node-sass');

module.exports = {
    entry: './src/app.js',

    output: {
        path: dist,
        filename: 'js/[name].bundle.js'
        // publicPath: 'http://cdn.com/'
    },
    module: {
        loaders: [{
                test: /\.js$/,
                exclude: path.resolve(__dirname, 'node_modules'),
                include: path.resolve(__dirname, 'src'),
                loader: 'babel-loader',
                query: {
                    presets: [
                        ["es2015", { module: false }],
                        'react'
                    ]
                }
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.css$/,
                loaders: [
                        'style-loader',
                        'css-loader?importLoaders=1',
                        'postcss-loader'//版本
                ]
            },
            {
                test: /\.less$/,
                loaders: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'less-loader'
                ] 
            },
            {
                test: /\.scss$/,
                loaders: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ] 
            },
            {
                test: /\.(png|jpg|gif|svg)$/i,
                loaders: [
                    'url-loader?limit=1000&images/[name]-[hash:5].[ext]',
                ]
            }
        ],
    },


    plugins: [
        new htmlWebpackPlungin({
            filename: 'index.html',
            template: 'index.html',
            title: 'webpack test',
            inject: 'body'
        }),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: [
                    require('autoprefixer')({
                        browsers: ['last 5 versions']
                    })
                ]
            }
        }),

    ]
};
