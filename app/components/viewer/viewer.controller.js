//controller
ViewerController.$inject = ['$log', 'toaster', 'slidesService'];
function ViewerController($log, toaster, slidesService) {

    const vm = this;

    // variables
    vm.title = 'This is viewer';

    vm.currentSlide = 0; // deze id zou ik van de slide.component moeten halen -- hoe? /
    vm.totalSlides = 4;

    vm.slides = [];

    vm.toggleCarrousel = toggleCarrousel;


    activate();

    /////////

    function activate() {
        toaster.pop('success', 'title', 'viewer text in box');
        vm.slides = slidesService.getAll();
        $log.log('slides here: ', vm.slides);
    }

    function toggleCarrousel() {
        $log.log('this is the carrousel');
    }

}

export default ViewerController;
