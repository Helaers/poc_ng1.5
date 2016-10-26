//controller
ViewerController.$inject = ['$log', 'toaster', 'slidesService', '$location'];
function ViewerController($log, toaster, slidesService, $location) {

    const vm = this;

    // variables
    vm.title = 'This is viewer';
    vm.showCarrousel = false;

    vm.currentSlide = 1; // deze id zou ik van de slide.component moeten halen -- hoe? /
    vm.totalSlides = 4;

    vm.slides = [];


    // functions
    vm.toggleCarrousel = toggleCarrousel;

    activate();

    /////////

    function activate() {
        toaster.pop('success', 'title', 'viewer text in box');
        vm.slides = slidesService.getAll();
        vm.totalSlides = vm.slides.length;
        vm.currentSlide = getSlideFromUrl();
    }

    function toggleCarrousel() {
        vm.showCarrousel = !vm.showCarrousel;
    }

    function getSlideFromUrl() {
        const url = $location.path();
        const index = url.lastIndexOf('/');
        return +url.substr(index + 1);
    }
}

export default ViewerController;
