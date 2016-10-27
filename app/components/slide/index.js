import angular from 'angular';

import slideController from './slide.controller';
import './slide.scss';

const module = angular.module('digibw.components.slide', [

]);

module.controller('SlideController', slideController);

export default module.name;
