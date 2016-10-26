//controller
SlideController.$inject = ['$log', 'toaster', 'slidesService', '$location', '$scope'];
function SlideController($log, toaster, slidesService, $location, $scope) {

    const vm = this;

    // variables
    vm.slide = {
        id: 0,
        title: 'Slide title',
    };

    // functions

    activate();

    /////////

    function activate() {
        //Get ID out of current URL
        const currentId = getSlideFromUrl();
        vm.slide = slidesService.getSlide(currentId);
        $scope.$emit('currentSlideID', vm.slide.id);
    }

    function getSlideFromUrl() {
        const url = $location.path();
        const index = url.lastIndexOf('/');
        return +url.substr(index + 1);
    }

}

export default SlideController;
