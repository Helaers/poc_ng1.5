//<wheel current="currentSlide" total="totalSlides" sendSlideId="getCurrentSlide()"></wheel>

// Import html & css
import template from './carrousel.component.html';
import './carrousel.component.scss';

// Controller
carrouselComponentController.$inject = [];
function carrouselComponentController() {

    const vm = this;

    // variables
    let index = 0;
    const widthThumb = -230;
    const totalSlides = 7;

    const thumbsToShow = 5; // hack om het maar 2 maal te laten sliden

    vm.carrouselStyle = {};

    // functions
    vm.prev = prev;
    vm.next = next;
    vm.close = close;
    vm.goToSlide = goToSlide;


    activate();

    /////////

    // vm.$onInit = function () {
    //     $log.log('show carrousel 2: ', vm.showCarrousel);
    //     vm.showCarrousel = !vm.showCarrousel;
    // };
    //
    // vm.$onChanges = function (changesObj) {
    //     $log.log('show changes: ', changesObj);
    // };

    function activate() {
        vm.totalSlides = vm.slides.length; // zou van service moeten komen
        vm.carrouselStyle.width = `${(totalSlides * widthThumb * -1) + 24}px`;

        if (index >= totalSlides - thumbsToShow) {
            index = totalSlides - thumbsToShow;
            if (index < 0) {
                index = 0;
            }
            const value = index * widthThumb;
            vm.carrouselStyle.marginLeft = `${value}px`;
        }
    }

    function prev() {
        if (index > 0) {
            index -= 1;
            const value = index * widthThumb * 3; // hardcoded x3
            vm.carrouselStyle.marginLeft = `${value}px`;
            //checkButtons();
        }
    }

    function next() {
        if (index < totalSlides - thumbsToShow) {
            index += 1;
            const value = index * widthThumb * 3;
            vm.carrouselStyle.marginLeft = `${value}px`;
            //checkButtons();
        }
    }

    function close() {
        if (vm.showCarrousel) {
            vm.showCarrousel = false;
            // this.closeCarrousel.emit(this.showCarrousel);
        }
    }

    function goToSlide(slide) {
        if (!slide.visible) {
            return;
        }
        // this.router.navigate(['/viewer/slide', slide.id]);
        // this.sendSlideId.emit(slide.id);
        close();
    }


}

// Component
export const carrouselComponent = {
    bindings: {
        slides: '<',
        showCarrousel: '=',
    },
    template: template,
    controller: carrouselComponentController,
    controllerAs: 'vm',
    transclude: true,
};
