(function() {
    'use strict';

    angular
        .module('app')
        .controller('AppController', AppController);

    AppController.$inject = [
        '$scope', '$rootScope', '$http', 'dataService'
    ];

    function AppController($scope, $rootScope, $http, dataService ) {
        
        var vm = this;

        vm.date =  dataService.getCurrentDate(true);

        dataService.getCountFromJSONFile("targetdetails.json", function(result){
               vm.count = result;
        });
	}
})();