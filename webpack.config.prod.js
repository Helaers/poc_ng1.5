'use strict';
const webpack = require('webpack')
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
    entry: [
        path.resolve(__dirname, 'app', 'app.js'),
    ],
    output: {
        path: path.resolve(__dirname, 'dist', 'app/build'),
        filename: 'bundle.js',
        publicPath: '/build',
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style', 'css?sourceMap!autoprefixer-loader?browsers=last 2 versions!sass?sourceMap'),
            },
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules|bower_components/,
            },
            {
                //easy html template imports
                test: /\.html$/,
                loader: 'raw',
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader?limit=10000&minetype=application/font-woff',
                exclude: [ /node_modules/ ],
            },
            {
                test: /\.(ttf|eot|svg|png)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader',
                exclude: [ /node_modules/ ],
            },
        ]
    },
    plugins: [
        // styles from initial chunks into separate css output file
        new ExtractTextPlugin('bundle.css'),
        new webpack.DefinePlugin({
            prod: true,
        }),
    ]
};


module.exports = config;
