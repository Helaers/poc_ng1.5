//controller
ViewerController.$inject = ['$log', 'toaster'];
function ViewerController($log, toaster) {

    const vm = this;

    // variables
    vm.title = 'This is viewer';

    vm.currentSlide = 0; // deze id zou ik van de slide.component moeten halen -- hoe? /
    vm.totalSlides = 4;

    vm.toggleCarrousel = toggleCarrousel;


    activate();

    /////////

    function activate() {
        toaster.pop('success', 'title', 'viewer text in box');
    }

    function toggleCarrousel() {
        $log.log('this is the carrousel');
    }

}

export default ViewerController;
