import angular from 'angular';

import addSlideController from './addSlide.controller';
import './addSlide.scss';


const module = angular.module('digibw.components.addSlide', [
]);


module.controller('AddSlideController', addSlideController);


export default module.name;
