import angular from 'angular';

angular
    .module('digibw')
    .constant('events', {
        errorEvent: 'errorEvent',
    })
    .config(routing)
    .config(errorHandler)
    .run(registerErrorToast);

routing.$inject = ['$urlRouterProvider'];
function routing($urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
}

errorHandler.$inject = ['$provide'];
function errorHandler($provide) {
    $provide.decorator('$exceptionHandler', ['$delegate', '$injector', 'events',
        function ($delegate, $injector, events) {
            return function (exception, cause) {
                const $rootScope = $injector.get('$rootScope');
                const message = exception && exception.message;
                //message += exception.stack;
                $rootScope.$emit(events.errorEvent, 'Program Error', message);
                $delegate(exception, cause);
            };
        },
    ]);
}

registerErrorToast.$inject = ['$rootScope', 'toaster', 'events'];
function registerErrorToast($rootScope, toaster, events) {
    $rootScope.$on(events.errorEvent, (event, title, detail) => {
        toaster.pop({ type: 'error', title: title, body: detail });
    });
}
