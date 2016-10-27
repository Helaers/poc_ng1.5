import angular from 'angular';

import editorController from './editor.controller';
import './editor.scss';


const module = angular.module('digibw.components.home', [
]);


module.controller('EditorController', editorController);


export default module.name;
