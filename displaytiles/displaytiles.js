(function() {
    'use strict';

    angular
        .module('app')
        .controller('DisplayTilesController', DisplayTilesController);

    DisplayTilesController.$inject = [
        '$scope', '$rootScope', '$http'
    ];

    function DisplayTilesController($scope, $rootScope, $http) {
        var vm  = this;
	    vm.TargetDetailsAll= [];
		$http.get('targetdetails.json').then(function(res){ 
			if(res !=null){
				vm.TargetDetailsAll = res.data;
			}
          });
	    }
})();