import angular from 'angular';
import { sampleDirDirective } from './sampleDir.directive';

const module = angular.module('digibw.common.directives.sampleDirDirective', []);

module.directive('sampleDir', sampleDirDirective);

export default module.name;
