//controller
EditorController.$inject = ['$log', '$scope', 'toaster', 'slidesService'];
function EditorController($log, $scope, toaster, slidesService) {

    const vm = this;

    // variables
    vm.title = 'This is editor';

    vm.totalSlides = 0;
    vm.slides = [];

    // function
    vm.toggleVisibility = toggleVisibility;
    vm.remove = remove;


    activate();

    /////////

    $scope.$on('slides-bag.drop-model', () => {
        onDrop();
    });

    function activate() {
        vm.slides = slidesService.getAll();
        vm.totalSlides = vm.slides.length;
    }

    function toggleVisibility(id) {
        slidesService.toggleVisibility(id);
        vm.slides = slidesService.getAll();
    }

    function remove(slide) {
        slidesService.removeSlide(slide);
        orderSlides();
    }

    function orderSlides() {
        vm.slides.forEach((slide, index) => {
            slide.id = index + 1;
        });
    }
    
    function onDrop() {
        orderSlides();
        // send to "backend"
        slidesService.setSlides(vm.slides);
    }

}

export default EditorController;
