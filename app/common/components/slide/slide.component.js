//<wheel current="currentSlide" total="totalSlides" sendSlideId="getCurrentSlide()"></wheel>

// Import html & css
import template from './slide.component.html';
import './slide.component.scss';

// Controller
slideComponentController.$inject = ['$log', '$stateParams', 'slidesService'];
function slideComponentController($log, $stateParams, slidesService) {

    const vm = this;

    // variables
    vm.slide = {
        'id' : 0,
        'title': 'Slide title'
    };

    activate();

    /////////

    function activate() {
        $log.log('this is the slide component');
        //throw new Error('this is a test error');

        // this.route.params.forEach((params: Params) => {
        //     let id = +params['id'];
        //     this.slide = this.slidesService.getSlide(id);
        //
        //     this.slidesService.currentSlide = this.slide['id']; // can't use this.slide.id ??? -- Property 'id' does not exist on type 'Object'
        //     //console.log('current slide in SLIDE:' ,this.slidesService.currentSlide)
        // });

        //Get ID out of current URL
        const currentId = $stateParams.id;
        vm.slide = slidesService.getSlide(id);
        $log.log('slide with id: ', currentId);
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
