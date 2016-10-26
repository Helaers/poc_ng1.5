import angular from 'angular';
import uiRouter from 'angular-ui-router';

import viewerController from './viewer.controller';
import './viewer.scss';

const module = angular.module('digibw.components.viewer', [
    uiRouter,
]);


module.config(['$stateProvider', ($stateProvider) => {
    $stateProvider
        .state('viewer.slide', {
            url: '/slide/:id',
            title: 'Slide',
            component: 'slide',
        });
}]);

module.controller('ViewerController', viewerController);

export default module.name;
