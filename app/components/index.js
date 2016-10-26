import angular from 'angular';

import home from './home';
import viewer from './viewer';
import slide from './slide';

const module = angular.module('digibw.components', [
    home,
    viewer,
    slide,
]);

export default module.name;
