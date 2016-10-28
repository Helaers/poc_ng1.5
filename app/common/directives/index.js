import angular from 'angular';

//import directives
import draggable from './draggable';
import sampleDir from './sampleDir';
import drawing from './drawing';

const module = angular.module('digibw.common.directives', [
    draggable,
    drawing,
    sampleDir,
]);

export default module.name;
