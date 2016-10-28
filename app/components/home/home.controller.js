//controller
HomeController.$inject = [];
function HomeController() {

    const vm = this;

    // variables
    vm.title = 'This is home';


    activate();

    /////////

    function activate() {
        // add toaster dependency
        // toaster.pop('success', 'Home page', 'This is the homepage');
    }

}

export default HomeController;
