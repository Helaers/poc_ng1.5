import angular from 'angular';
import uiRouter from 'angular-ui-router';

import addSlideController from '../addSlide/addSlide.controller';
import homeController from './home.controller';
import viewerController from '../viewer/viewer.controller';
import editorController from '../editor/editor.controller';
import slideController from '../slide/slide.controller';
import './home.scss';
//
// import slideTemplate from '../../common/components/slide/slide.component.html';
// import slideController from '../../common/components/slide/slide.component';

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
        .state('editor', {
            url: '/editor',
            title: 'Editor',
            templateUrl: './components/editor/editor.html',
            controller: editorController,
            controllerAs: 'vm',
        })
        .state('addslide', {
            url: '/editor/addslide',
            title: 'Addslide',
            templateUrl: './components/addSlide/addSlide.html',
            controller: addSlideController,
            controllerAs: 'vm',
        })
        .state('viewer', {
            url: '/viewer',
            title: 'Viewer',
            templateUrl: './components/viewer/viewer.html',
            controller: viewerController,
            controllerAs: 'vm',
        })
        .state('viewer.slide', {
            url: '/slide/:id',
            title: 'Slide',
            views: {
                slides: {
                    templateUrl: './components/slide/slide.html',
                    controller: slideController,
                    controllerAs: 'vm',
                },
            },
        });
        // .state('viewer.slide', {
        //     url: '/slide/:id',
        //     title: 'Slide',
        //     component: 'slide',
        //     views: {
        //         slides: {
        //             template: slideTemplate,
        //             component: 'slide',
        //             controllerAs: 'vm',
        //         },
        //     },
        // });
}]);

module.controller('HomeController', homeController);


export default module.name;
