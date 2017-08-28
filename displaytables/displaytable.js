(function() {
    'use strict';

    angular
        .module('app')
        .controller('DisplayController', DisplayController);

    DisplayController.$inject = [
        '$scope', '$rootScope', '$http', 'dataService'
    ];

    function DisplayController($scope, $rootScope, $http, dataService) {
        var vm  = this;
	    vm.TargetDetailsAll= [];
        vm.ShowDateFromCallBack = "0";
        
        dataService.getDetailsFromJSONFile("targetdetails.json", function(result){
                vm.TargetDetailsAll = result;
        });

        vm.ShowDate =  dataService.getCurrentDate(true);
        //Console.log(vm.ShowDate+ " vm.ShowDate");

        dataService.getCurrentDateWithCallback(true, function(result){
            vm.ShowDateFromCallBack = result;
            //Console.log(vm.ShowDateFromCallBack+ " vm.ShowDateFromCallBack");
        });
	 }
})();