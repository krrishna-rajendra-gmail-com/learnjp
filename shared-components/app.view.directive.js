(function() {
    "use strict";

    angular
        .module("app")
        .directive("viewBoxAuto", viewBoxAuto);

    function viewBoxAuto() {
        var directive = {
            scope: {
                targetDetails : "="
            },
            restrict: "E",
            controller: viewBoxAutoController,
            controllerAs: "vm",
            bindToController: true,
            templateUrl: "/shared-components/app.view.directive.html"
        };

        return directive;
    }
    viewBoxAutoController.$inject = [
         'dataService'
    ];
    function viewBoxAutoController(dataService) {
        var vm = this;
        vm.deleteItem = deleteItem;
        vm.viewItem = viewItem;

        function deleteItem(ID){
            console.log('in delete item', dataService)
            dataService.deleteItem(ID);
        }

        function viewItem(targetDetail){
            dataService.viewItem(targetDetail);
        }
    }





})();