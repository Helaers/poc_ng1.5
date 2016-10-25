import angular from 'angular';

//import components
import wheel from './wheel';
import sidebar from './sidebar';

const module = angular.module('digibw.common.components', [
    wheel,
    sidebar,
]);

export default module.name;
