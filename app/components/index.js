import angular from 'angular';

import editor from './editor';
import home from './home';
import slide from './slide';
import viewer from './viewer';

const module = angular.module('digibw.components', [
    editor,
    home,
    slide,
    viewer,
]);

export default module.name;
