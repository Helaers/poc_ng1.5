//<wheel current="currentSlide" total="totalSlides" sendSlideId="getCurrentSlide()"></wheel>

// Import html & css
import template from './modal.component.html';
import './modal.component.scss';

// Controller
modalComponentController.$inject = [];
function modalComponentController() {

    const vm = this;

    // variables
    vm.test = 'test';
    // functions


    activate();

    /////////


    function activate() {

    }


}

// Component
export const modalComponent = {
    bindings: {
        slides: '<',
        showCarrousel: '=',
    },
    template: template,
    controller: modalComponentController,
    controllerAs: 'vm',
    transclude: true,
};
