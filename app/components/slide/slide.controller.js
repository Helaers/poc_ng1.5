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
        $log.log('this is the slide controller');
        //Get ID out of current URL
        const currentId = getSlideFromUrl();
        vm.slide = slidesService.getSlide(currentId);
        $log.log('slide with id: ', currentId, vm.slide);
        $scope.$emit('currentSlideID', vm.slide.id);
    }

    function getSlideFromUrl() {
        const url = $location.path();
        const index = url.lastIndexOf('/');
        return +url.substr(index + 1);
    }

}

export default SlideController;
