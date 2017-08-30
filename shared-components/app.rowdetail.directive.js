(function() {
    "use strict";

    angular
        .module("app")
        .directive("targetDetail", targetDetail);

    function targetDetail() {
        var directive = {
            scope: {
                targetDetail: "=",
            },
            restrict: "A",
            controller: targetDetailController,
            controllerAs: "vm",
            bindToController: true,
            templateUrl: "/shared-components/app.rowdetail.directive.html"
        };

        return directive;
    }

    targetDetailController.$inject = [
         'dataService'
    ];

    function targetDetailController(dataService) {
        var vm = this;

        vm.deleteItem = deleteItem;
        vm.saveItem = saveItem;
        vm.editItem = editItem;
        vm.showEdit = false;

        function deleteItem(ID) {
            dataService.deleteItem(ID);
        }

        function saveItem(targetDetail){
            dataService.viewItem(targetDetail);
        }

        function editItem(){
            vm.showEdit = true;
        }
    }
})();
