//controller
EditorController.$inject = ['$log', 'toaster', 'slidesService'];
function EditorController($log, toaster, slidesService) {

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

    function activate() {
        toaster.pop('success', 'title', 'editor here');

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
        for (let i = 0; i < vm.slides.length; i++) {
            vm.slides[i].id = i + 1;
        }
    }

}

export default EditorController;
