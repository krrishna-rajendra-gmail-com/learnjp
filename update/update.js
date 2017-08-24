(function() {
    'use strict';

    angular
        .module('app')
        .controller('AddNewController', AddNewController);

    AddNewController.$inject = [
        '$scope', '$rootScope', '$http'
    ];

    function AddNewController($scope, $rootScope, $http) {
        console.log('called this controller..');
        var vm  = this;
        vm.Message = "Please fill enteries to add a new target. Existing Targets are ";
		vm.TargetDetailsAll= [];
                
        vm.AddNewTarget = AddNewTarget;
        console.log(vm.Message);
		$http.get('targetdetails.json')
        .then(function(res){ 
			if(res !=null){
                vm.TargetDetailsAll = res.data;
			}
        });

      

        function AddNewTarget(){
             vm.TargetDetailsAll.push({
                 Revenue: vm.revenue,
                 TargetName: vm.targetName,
                 ID: (vm.TargetDetailsAll[vm.TargetDetailsAll.length-1].ID + 1),
                 Email:  vm.email,
                 Address: vm.address
             });
        }
        
        


	}
})();