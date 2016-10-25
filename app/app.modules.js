import angular from 'angular';
import uiRouter from 'angular-ui-router';
import modelFactory from 'angular-model-factory';
import toaster from 'angularjs-toaster';
import ngSanitize from 'angular-sanitize';
// var ngSanitize = require('angular-sanitize');

// styles
import './app.scss';

// components
import components from './components';
import common from './common';
import appComponent from './app.component';

export default angular
    .module('digibw', [
        // 3th party
        uiRouter,
        modelFactory.name,
        toaster,
        ngSanitize,

        // application
        components,
        common,
    ])
    .directive('app', appComponent)
;
