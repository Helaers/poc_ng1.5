import angular from 'angular';
import uiRouter from 'angular-ui-router';

import homeController from './home.controller';
import viewerController from '../viewer/viewer.controller';
import './home.scss';

const module = angular.module('digibw.components.home', [
    uiRouter,
]);


module.config(['$stateProvider', ($stateProvider) => {
    $stateProvider
        .state('home', {
            url: '/',
            //title: 'Resumes',
            templateUrl: './components/home/home.html',
            controller: homeController,
            controllerAs: 'vm',
            //role: ['admin', 'publisher', 'editor'],
        })
        .state('viewer', {
            url: '/viewer',
            title: 'Viewer',
            templateUrl: './components/viewer/viewer.html',
            controller: viewerController,
            controllerAs: 'vm',
        });
}]);

module.controller('HomeController', homeController);


export default module.name;
