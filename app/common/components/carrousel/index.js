import angular from 'angular';
import { carrouselComponent } from './carrousel.component';

const module = angular.module('digibw.common.components.carrouselComponent', []);

module.component('carrousel', carrouselComponent);

export default module.name;
