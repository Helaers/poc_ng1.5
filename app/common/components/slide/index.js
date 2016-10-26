import angular from 'angular';
import { slideComponent } from './slide.component';

const module = angular.module('digibw.common.components.slideComponent', []);

module.component('slide', slideComponent);

export default module.name;
