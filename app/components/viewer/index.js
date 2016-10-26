import angular from 'angular';
import uiRouter from 'angular-ui-router';

import viewerController from './viewer.controller';
import './viewer.scss';

const module = angular.module('digibw.components.viewer', [
    uiRouter,
]);

module.controller('ViewerController', viewerController);

export default module.name;
