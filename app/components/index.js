import angular from 'angular';

import addSlide from './addSlide';
import editor from './editor';
import home from './home';
import slide from './slide';
import viewer from './viewer';

const module = angular.module('digibw.components', [
    addSlide,
    editor,
    home,
    slide,
    viewer,
]);

export default module.name;
