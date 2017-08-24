angular
    .module('app')
    .config(['$stateProvider', function($stateProvider) {
        // Default application route
        //$urlRouterProvider.otherwise('/');
        // Route to the application links
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '/chart/chart.html',
                controller: 'ChartController'
            })
            .state('display', {
                url: '/display',
                templateUrl: '/displaytables/displaytable.html',
                controller: 'DisplayController'
            })
            .state('displaytile', {
                url: '/displaytile',
                templateUrl: '/displaytiles/displaytiles.html',
                controller: 'DisplayTilesController'
            })
            .state('about', {
                url: '/about',
                templateUrl: '/addnew/addnew.html',
                controller: 'AddNewController'
            })
            .state('update', {
                url: '/update',
                template: '<strong>test contacts</strong>'
            })
            .state('contacts', {
                url: '/contacts',
                templateUrl: '/contact/contact.html',
                controller: 'ContactController'
            });
    }]);