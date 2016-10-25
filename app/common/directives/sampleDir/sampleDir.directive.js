//import html & css
import template from './sampleDir.directive.html';
import './sampleDir.directive.scss';

//controller
sampleDirDirectiveController.$inject = [];
function sampleDirDirectiveController() {

    const vm = this;

    // variables
    vm.message = 'Hello from sample directive';

    activate();

    /////////

    function activate() {
        //throw new Error('this is a test error');
    }
}

//directive
export const sampleDirDirective = function () {
    return {
        restrict: 'E',
        template: template,
        controller: sampleDirDirectiveController,
        replace: true,
        controllerAs: 'vm',
        scope: {},
    };
};

sampleDirDirective.$inject = [];
