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
    vm.close = close;
    vm.add = add;

    activate();

    /////////


    function activate() {

    }

    function close() {
        // this.closeModal.emit(this.showModal);
        vm.showModal = false;
    }

    function add() {
        // console.log(this.modalType)
        // this.confirmModal.emit(this.modalType);
        vm.confirmModal({ type: vm.modalType });
        close();
    }

}

// Component
export const modalComponent = {
    bindings: {
        showModal: '=',
        modalHeader: '<',
        modalType: '<',
        confirmModal: '&',
    },
    template: template,
    controller: modalComponentController,
    controllerAs: 'vm',
    transclude: true,
};
