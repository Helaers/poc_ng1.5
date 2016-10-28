import angular from 'angular';
import { drawingDirective } from './drawing.directive';

const module = angular.module('digibw.common.directives.drawingDirective', []);

module.directive('drawing', drawingDirective);

export default module.name;
