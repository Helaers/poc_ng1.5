import angular from 'angular';

import SlidesService from './slides.service';

const module = angular.module('digibw.common.services', []);

module.service('slidesService', SlidesService);

export default module.name;
