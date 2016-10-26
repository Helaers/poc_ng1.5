//<wheel current="currentSlide" total="totalSlides" sendSlideId="getCurrentSlide()"></wheel>

// Import html & css
import template from './slide.component.html';
import './slide.component.scss';

// Controller
slideComponentController.$inject = ['$log', '$location', 'slidesService'];
function slideComponentController($log, $location, slidesService) {

    const vm = this;

    // variables
    vm.slide = {
        id: 0,
        title: 'Slide title',
    };

    activate();

    /////////

    // vm.$onInit = function () {
    //     const currentId = getSlideFromUrl();
    //     vm.slide = slidesService.getSlide(currentId);
    //     $log.log('slide with id: ', currentId);
    // };
    //
    // vm.$onChanges = function (changesObj) {
    //     $log.log('show changes: ', changesObj);
    // };

    function activate() {
        $log.log('this is the slide component');
        //throw new Error('this is a test error');

        // this.route.params.forEach((params: Params) => {
        //     let id = +params['id'];
        //     this.slide = this.slidesService.getSlide(id);
        //
        //     this.slidesService.currentSlide = this.slide['id']; // can't use this.slide.id ??? --
        // Property 'id' does not exist on type 'Object'
        //     //console.log('current slide in SLIDE:' ,this.slidesService.currentSlide)
        // });

        //Get ID out of current URL
        const currentId = getSlideFromUrl();
        vm.slide = slidesService.getSlide(currentId);
        $log.log('slide with id: ', currentId);
    }


    function getSlideFromUrl() {
        const url = $location.path();
        const index = url.lastIndexOf('/');
        return +url.substr(index + 1);
    }

}

// Component
export const slideComponent = {
    bindings: {
    },
    template: template,
    controller: slideComponentController,
    controllerAs: 'vm',
    transclude: true,
};
