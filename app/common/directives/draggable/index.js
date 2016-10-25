import angular from 'angular';
import { draggableDirective } from './draggable.directive';

const module = angular.module('digibw.common.directives.draggableDirective', []);

module.directive('draggable', draggableDirective);

export default module.name;
