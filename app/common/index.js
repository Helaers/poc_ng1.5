import angular from 'angular';

//import folders
import directives from './directives';
import components from './components';

const module = angular.module('digibw.common', [
    directives,
    components,
]);

export default module.name;
