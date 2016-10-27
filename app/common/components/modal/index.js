import angular from 'angular';
import { modalComponent } from './modal.component';

const module = angular.module('digibw.common.components.modalComponent', []);

module.component('modal', modalComponent);

export default module.name;
