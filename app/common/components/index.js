import angular from 'angular';

//import components
import wheel from './wheel';
import sidebar from './sidebar';
import carrousel from './carrousel';

const module = angular.module('digibw.common.components', [
    wheel,
    sidebar,
    carrousel,
]);

export default module.name;
