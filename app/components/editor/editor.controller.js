//controller
EditorController.$inject = ['$log', 'toaster'];
function EditorController($log, toaster) {

    const vm = this;

    // variables
    vm.title = 'This is editor';


    activate();

    /////////

    function activate() {
        toaster.pop('success', 'title', 'editor here');
    }

}

export default EditorController;
