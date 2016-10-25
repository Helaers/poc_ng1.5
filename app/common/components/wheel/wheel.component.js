//<wheel current="currentSlide" total="totalSlides" sendSlideId="getCurrentSlide()"></wheel>

// Import html & css
import template from './wheel.component.html';
import './wheel.component.scss';

// Controller
wheelComponentController.$inject = ['$log'];
function wheelComponentController($log) {

    const vm = this;

    // variables
    vm.expanded = true;
    vm.showPenDropdown = false;
    vm.showAnswersDropdown = false;

    // functions
    vm.nextSlide = nextSlide;
    vm.prevSlide = prevSlide;
    vm.toggleExpandedView = toggleExpandedView;
    vm.togglePen = togglePen;
    vm.toggleAnswers = toggleAnswers;

    activate();

    /////////

    function activate() {
        $log.log('this is the wheel');
        //throw new Error('this is a test error');
    }

    // $document.on('click', function(event){
    //     // // in dropdown kunnen klikken zonder dat dropdown verdwijnt
    //     // var isClickedElementChildOfDropdown = $element.find(event.target).length > 0;
    //     // // $log.log('clicked shit: ', isClickedElementChildOfDropdown);
    //     // if (isClickedElementChildOfDropdown) return;
    //
    //     $log.log('clicked on doc', event);
    //     let id = event.toElement.id;
    //     if (id === '' || id === undefined || id === null) {
    //         vm.showPenDropdown = false;
    //         vm.showAnswersDropdown = false;
    //     }
    // });


    function nextSlide() {
        $log.log('next slide');
    }

    function prevSlide() {
        $log.log('prev slide');
    }


    function toggleExpandedView() {
        vm.expanded = !vm.expanded;
    }
    function togglePen() {
        vm.showPenDropdown = !vm.showPenDropdown;
        if (vm.showAnswersDropdown) {
            vm.showAnswersDropdown = false;
        }
    }

    function toggleAnswers() {
        vm.showAnswersDropdown = !vm.showAnswersDropdown;
        if (vm.showPenDropdown) {
            vm.showPenDropdown = false;
        }
    }
}

// Component
export const wheelComponent = {
    bindings: {
        current: '<', // SWB
        total: '<',
        slideId: '=',
    },
    template: template,
    controller: wheelComponentController,
    controllerAs: 'vm',
    transclude: true,
};
