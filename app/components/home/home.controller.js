//controller
HomeController.$inject = ['$log', 'toaster'];
function HomeController($log, toaster) {

    const vm = this;

    // variables
    vm.title = 'This is home';


    activate();

    /////////

    function activate() {
        toaster.pop('success', 'title', 'text');
    }

}

export default HomeController;
