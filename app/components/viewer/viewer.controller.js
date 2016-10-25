//controller
ViewerController.$inject = ['$log', 'toaster', 'slidesService'];
function ViewerController($log, toaster, slidesService) {

    const vm = this;

    // variables
    vm.title = 'This is viewer';
    vm.showCarrousel = false;

    vm.currentSlide = 0; // deze id zou ik van de slide.component moeten halen -- hoe? /
    vm.totalSlides = 4;

    vm.slides = [];

    vm.toggleCarrousel = toggleCarrousel;


    activate();

    /////////

    function activate() {
        toaster.pop('success', 'title', 'viewer text in box');
        vm.slides = slidesService.getAll();

    }

    function toggleCarrousel() {
        vm.showCarrousel = !vm.showCarrousel;
    }

}

export default ViewerController;
