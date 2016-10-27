//controller
AddSlideController.$inject = ['$log', '$scope', 'toaster', 'slidesService'];
function AddSlideController($log, $scope, toaster, slidesService) {

    const vm = this;

    // variables
    vm.title = 'This is editor';

    vm.slides = [];
    vm.type = '';
    vm.id;
    vm.modalType = '';
    vm.modalHeaders = ['Afbeelding importeren', 'Video importeren', 'Audio importeren', 'Hyperlink importeren', 'Bingel oefening importeren']
    vm.modalHeader = ''

    vm.textPreview = false;
    vm.textSlide = false;
    vm.showModal = false;


    // function
    vm.showTextPreview = showTextPreview;
    vm.showSlideText = showSlideText;
    vm.clear = clear;
    vm.sendToOverview = sendToOverview;
    vm.openModal = openModal;
    vm.closeModal = closeModal;
    vm.confirmModal = confirmModal;

    activate();

    /////////

    function activate() {
        toaster.pop('success', 'title', 'add slide here');
        vm.slides = slidesService.getAll();
        vm.id = vm.slides.length + 1;
    }

    function showTextPreview() {
        vm.type = 'previewText';
        if (!vm.textSlide) {
            vm.textPreview = true;
        }
    }

    function showSlideText() {
        vm.type = 'text';
        vm.textPreview = false;
        vm.textSlide = true;
    }

    function clear() {
        vm.textPreview = false;
        vm.textSlide = false;
        vm.type = '';
    }

    function sendToOverview() {
        $log.log('type: ',this.type);
        if (vm.type !== 'previewText' && vm.type !== '') {
            vm.addUserSlide(vm.id, vm.type);
        }
        // this.router.navigate(['/editor']);
    }

    function addUserSlide(index, type) {

        let slide = {
            id: index,
            html:[],
            thumb: '',
            visible: true,
            type: 'user'
        };


        switch(type) {
            case 'text':
                slide.html = ["<img class='slide__image' src='./assets/images/slide9.png' />"];
                slide.thumb = '../../assets/images/thumb9.png';
                break;
            case 'video':
                slide.html = ["<img class='slide__image' src='./assets/images/slide8.png' />"];
                slide.thumb = '../../assets/images/thumb8.png';
                break;
            case 'image':
                slide.html = ["<img class='slide__image' src='./assets/images/slide10.png' />"];
                slide.thumb = '../../assets/images/thumb10.png';
                break;
            case 'audio':
                slide.html = ["<img class='slide__image' src='./assets/images/slide11.png' />"];
                slide.thumb = '../../assets/images/thumb11.png';
                break;
            case 'link':
                slide.html = ["<img class='slide__image' src='./assets/images/slide12.png' />"];
                slide.thumb = '../../assets/images/thumb12.png';
                break;
            case 'bingel':
                slide.html = ["<img class='slide__image' src='./assets/images/slide13.png' />"];
                slide.thumb = '../../assets/images/thumb13.png';
                break;
            default:
                $log.log('something went wrong in adding slide');
        }

        slidesService.addSlide(slide);
    }



    function openModal(type){

        //get header by type
        switch(type) {
            case 'image':
                vm.modalHeader = vm.modalHeaders[0];
                break;
            case 'video':
                vm.modalHeader = vm.modalHeaders[1];
                break;
            case 'audio':
                vm.modalHeader = vm.modalHeaders[2];
                break;
            case 'link':
                vm.modalHeader = vm.modalHeaders[3];
                break;
            case 'bingel':
                vm.modalHeader = vm.modalHeaders[4];
                break;
        }

        if(vm.showModal === false) {
            $log.log(type);
            vm.modalType = type;
            vm.showModal = true;
        }
    }

    function closeModal(){
        if(vm.showModal === true){
            vm.showModal = false;
            vm.type = '';
            vm.modalType = '';
        }
    }

    function confirmModal(type) {
        closeModal(true);
        vm.type = type;
    }

}

export default AddSlideController;
