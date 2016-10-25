import angular from 'angular';
import { wheelComponent } from './wheel.component';

const module = angular.module('digibw.common.components.wheelComponent', []);

module.component('wheel', wheelComponent);

export default module.name;
