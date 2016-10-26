//<wheel current="currentSlide" total="totalSlides" sendSlideId="getCurrentSlide()"></wheel>

// Import html & css
import template from './wheel.component.html';
import './wheel.component.scss';

// Controller
wheelComponentController.$inject = ['$log', 'slidesService', '$state'];
function wheelComponentController($log, slidesService, $state) {

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
        $log.log('next slide', vm.current, vm.total);

        if (vm.current < vm.total) {
            vm.current = vm.current + 1;

            const slide = slidesService.getSlide(vm.current);
            $log.log('slide: ', slide);

            if (slide.visible) {
                // TODO send current slide to VIEWER
                $state.go('viewer.slide', { id: vm.current });
            } else {
                nextSlide();
            }
        }
    }

    function prevSlide() {
        $log.log('prev slide', vm.current, vm.total);

        if (vm.current > 1) {
            vm.current = vm.current - 1;

            const slide = slidesService.getSlide(vm.current);
            if (slide.visible) {
                // TODO send current slide to VIEWER
                $state.go('viewer.slide', { id: vm.current });
            } else {
                prevSlide();
            }
        }
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
