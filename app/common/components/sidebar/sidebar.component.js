//<wheel current="currentSlide" total="totalSlides" sendSlideId="getCurrentSlide()"></wheel>

// Import html & css
import template from './sidebar.component.html';
import './sidebar.component.scss';

// Controller
sidebarComponentController.$inject = ['$log'];
function sidebarComponentController($log) {

    const vm = this;

    // variables
    vm.showLeftSidebar = false;
    vm.showRightSidebar = false;

    // functions
    vm.toggleLeftSidebar = toggleLeftSidebar;
    vm.toggleRightSidebar = toggleRightSidebar;


    activate();

    /////////

    function activate() {
        $log.log('this is the sidebar');
        //throw new Error('this is a test error');
    }


    function toggleLeftSidebar() {
        vm.showLeftSidebar = !vm.showLeftSidebar;
        if (vm.showRightSidebar) {
            vm.showRightSidebar = false;
        }
    }

    function toggleRightSidebar() {
        vm.showRightSidebar = !vm.showRightSidebar;
        if (vm.showLeftSidebar) {
            vm.showLeftSidebar = false;
        }
    }
}

// Component
export const sidebarComponent = {
    bindings: {
    },
    template: template,
    controller: sidebarComponentController,
    controllerAs: 'vm',
    transclude: true,
};
