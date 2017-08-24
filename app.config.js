angular
    .module('app')
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        // Default application route
        $urlRouterProvider.otherwise('/');
        // Route to the application links
        $stateProvider
            .state('display', {
                url: '/display',
                template: '/display/display.html',
				controller: 'Display'
            });
    }]);