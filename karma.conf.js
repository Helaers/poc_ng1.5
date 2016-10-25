const webpack = require('webpack');
const packageJson = require('./package.json');

// Karma configuration
module.exports = function(config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['mocha', 'chai-sinon', 'jquery-chai'],


        // list of files / patterns to load in the browser
        files: [
            {pattern: 'tests.bundle.js', watched: false},
        ],


        // list of files to exclude
        exclude: [],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'tests.bundle.js': ['webpack'],
        },


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress'],


        //// web server port
        //port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // Concurrency level
        // how many browser should be started simultanous
        concurrency: Infinity,

        // webpack conf
        // see also: https://www.npmjs.com/package/karma-webpack-with-fast-source-maps
        webpack: {
            resolve: {
                root: __dirname,
                extensions: ['', '.js'],
            },
            devtool: 'cheap-module-source-map',
            module: {
                noParse: [
                    /node_modules\/sinon\//,
                ],
                loaders: [
                    {
                        test: /\.js$/,
                        loader: 'babel-loader',
                        exclude: [/node_modules/],
                    },
                    {
                        test: /\.htm$/,
                        loader: 'raw',
                        exclude: [/node_modules/],
                    },
                    {
                        test: /\.scss$/,
                        loader: 'null-loader',
                        exclude: [/node_modules/],
                    }
                ],
            },
            stats: {colors: true, reasons: true, errorDetails: true},
            debug: false,
            cache: true,
            plugins: [
                new webpack.DefinePlugin({
                    VERSION: JSON.stringify(packageJson.version),
                    ON_TEST: true,
                }),
            ],
        },

        webpackMiddleware: {
            noInfo: true,
        },

        webpackServer: {
            noInfo: true, //please don't spam the console when running in karma!
        },

        //plugins: [
        //    require('karma-webpack'),
        //    'karma-chai',
        //    'karma-mocha',
        //    'karma-chrome-launcher',
        //]
    })
}
