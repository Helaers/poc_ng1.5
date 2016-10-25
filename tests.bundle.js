//import 'jquery';

//import chai from 'chai';
//import chaiAsPromised from 'chai-as-promised';
//import sinonChai from 'sinon-chai';
//import 'chai-jquery';
//import chaiJQ from 'chai-jq';


// we need this to fill in the gap for the missing features for phantomJS
import 'phantomjs-polyfill';

// basic angular
import 'angular';
import 'angular-mocks/angular-mocks';

// the app
import 'app/app.modules.js';

// prepare for extended chai
//chai.use(chaiAsPromised);
//chai.use(sinonChai);
//chai.use(chaiJQ);

//
// Using: karma-webpack
//
 // This is the entry file for webpack test
 var testContext = require.context('./app', true, /\.spec\.js/);

 // Get all the files, for each file, call the context function
 // that will require the file and load it up here. Context will
 // loop and require those spec files here
 testContext.keys().forEach(testContext);

// using karma-webpack-with-fast-source-maps

// --------------------
//// This gets replaced by karma webpack with the updated files on rebuild
//var __karmaWebpackManifest__ = [];
//
//// require all modules ending in "_test" from the
//// current directory and all subdirectories
//var testsContext = require.context('./app', true, /\.spec\.js/);
//
//function inManifest(path) {
//    return __karmaWebpackManifest__.indexOf(path) >= 0;
//}
//
//var runnable = testsContext.keys().filter(inManifest);
//
//// Run all tests if we didn't find any changes
//if (!runnable.length) {
//    runnable = testsContext.keys();
//}
//
//runnable.forEach(testsContext);
