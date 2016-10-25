import angular from 'angular';

import home from './home';
import viewer from './viewer';

const module = angular.module('digibw.components', [
    home,
    viewer,
]);

export default module.name;
