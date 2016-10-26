export default class SlidesService {
    constructor() {
        this.SLIDES = [
            { id: 1, html: ["<img class='slide__image' src='../../../assets/images/slide1.png' />"], thumb: '../../../assets/images/thumb1.png', visible: true },
            { id: 2, html: ["<img class='slide__image' src='../../../assets/images/slide2.png' />"], thumb: '../../../assets/images/thumb2.png', visible: true },
            { id: 3, html: ["<img class='slide__image' src='../../../assets/images/slide3.png' />"], thumb: '../../../assets/images/thumb3.png', visible: true },
            { id: 4, html: ["<img class='slide__image' src='../../../assets/images/slide4.png' />"], thumb: '../../../assets/images/thumb4.png', visible: true },
            {
                id: 5,
                html: [
                    "<img class='slide__image' src='../../../assets/images/slide5.png' />" +
                    "<div style='position:absolute' class='slide__label--draggable one'>81 338</div>" +
                    "<div style='position:absolute' class='slide__label--draggable two'>100 000</div>" +
                    "<div style='position:absolute' class='slide__label--draggable three'>87 307</div>" +
                    "<div style='position:absolute' class='slide__label--draggable four'>7 030</div>" +
                    "<div style='position:absolute' class='slide__label--draggable five'>72 166</div>"],
                thumb: '../../../assets/images/thumb5.png',
                visible: true,
            },
            { id: 6, html: ["<img class='slide__image' src='../../../assets/images/slide6.png' />"], thumb: '../../../assets/images/thumb6.png', visible: true },
            { id: 7, html: ["<img class='slide__image' src='../../../assets/images/slide7.png' />"], thumb: '../../../assets/images/thumb7.png', visible: true },
        ];
    }

    getAll() {
        return this.SLIDES;
    }

    setSlides(slides) {
        this.SLIDES = slides;
    }

    getSlide(id) {
        return this.SLIDES.find(item => item.id === id);
    }

    addSlide(slide) {
        this.SLIDES.push(slide);
    }

    removeSlide(slide) {
        const slideToRemove = this.SLIDES.find(item => item.id === slide.id);
        const index = this.SLIDES.indexOf(slideToRemove);
        if (index > -1) {
            this.SLIDES.splice(index, 1);
        }
    }

    toggleVisibility(id) {
        const slide = this.getSlide(id);
        slide.visible = !slide.visible;
    }
}

SlidesService.$inject = ['$log'];
