//controller
ViewerController.$inject = ['$log', 'toaster'];
function ViewerController($log, toaster) {

    const vm = this;

    // variables
    vm.title = 'This is viewer';


    activate();

    /////////

    function activate() {
        toaster.pop('success', 'title', 'viewer shit');
    }

}

export default ViewerController;
