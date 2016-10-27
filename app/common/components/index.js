import angular from 'angular';

//import components
import carrousel from './carrousel';
import modal from './modal';
import sidebar from './sidebar';
import wheel from './wheel';

const module = angular.module('digibw.common.components', [
    carrousel,
    modal,
    sidebar,
    wheel,
]);

export default module.name;
