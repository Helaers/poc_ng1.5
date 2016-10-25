import angular from 'angular';

//import folders
import services from './services';
import directives from './directives';
import components from './components';

const module = angular.module('digibw.common', [
    services,
    directives,
    components,
]);

export default module.name;
