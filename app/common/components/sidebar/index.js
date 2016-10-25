import angular from 'angular';
import { sidebarComponent } from './sidebar.component';

const module = angular.module('digibw.common.components.sidebarComponent', []);

module.component('sidebar', sidebarComponent);

export default module.name;
