import angular from 'angular';

//import directives
import draggable from './draggable';
import sampleDir from './sampleDir';

const module = angular.module('digibw.common.directives', [
    draggable,
    sampleDir,
]);

export default module.name;
