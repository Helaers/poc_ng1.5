import angular from 'angular';

import slideController from './slide.controller';
import './slide.scss';

const module = angular.module('digibw.components.viewer', [

]);

module.controller('SlideController', slideController);

export default module.name;
