'use strict';
const webpack = require('webpack')
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
    entry: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080',
        path.resolve(__dirname, 'app', 'app.js'),
    ],
    output: {
        path: path.resolve(__dirname, 'app', 'build'),
        filename: 'bundle.js',
        publicPath: '/build',
    },
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                loader: 'eslint',
                exclude: /(node_modules|bower_components)/,
            },
        ],
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
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            ON_TEST: false,
        }),
        // styles from initial chunks into separate css output file
        new ExtractTextPlugin('bundle.css'),
    ],
    devtool: "#inline-source-map",
};


module.exports = config;
