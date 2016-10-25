import angular from 'angular';

import viewerController from './viewer.controller';
import './viewer.scss';

const module = angular.module('digibw.components.viewer', [

]);

module.controller('ViewerController', viewerController);


export default module.name;
