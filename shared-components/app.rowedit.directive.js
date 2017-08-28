(function() {
    "use strict";

    angular
        .module("app")
        .directive("viewBoxAuto", viewBoxAuto);

    function viewBoxAuto() {
        var directive = {
            scope: {
                targetDetailsAll: "=",
            },
            restrict: "E",
            controller: viewBoxAutoController,
            controllerAs: "vm",
            bindToController: true,
            templateUrl: "/shared-components/app.view.directive.html"
        };

        return directive;
    }

    function viewBoxAutoController() {
        
        var vm = this;
        vm.deleteItem = deleteItem;
        vm.viewItem = viewItem;

        function deleteItem(ID) {
            //Console.log("ID : "+ ID);
            var filters_to_remove = [], index = null;

            _.each(vm.targetDetailsAll, function(item, index) {
                if (item.ID === ID) {
                    filters_to_remove.push(index);
                }
            });

            while ((index = filters_to_remove.pop()) != null) {
                vm.targetDetailsAll.splice(index, 1);
            }
            popupConfirm(ID);
        }

        function popupConfirm(ID){
            BootstrapDialog.show({
                        type: BootstrapDialog.TYPE_SUCCESS,
                        title: 'Deleted',
                        message: '<b>Target ID: '+ ID +' has been deleted.</b>',
                        buttons: [{
                            label: 'OK',
                            action: function(dialog) {
                                dialog.close();
                            }
                        }]
                    });

        }

        function viewItem(targetDetail){
            BootstrapDialog.show({
                        type: BootstrapDialog.TYPE_SUCCESS,
                        title: 'Deleted',
                        message: showAllFieldsDetails(targetDetail),
                        buttons: [{
                            label: 'OK',
                            action: function(dialog) {
                                dialog.close();
                            }
                        }]
                    });

        }

        function showAllFieldsDetails(targetDetail){
            var item = "ID: "+ targetDetail.ID + "<br/>"+
            "Target Name: "+ targetDetail.TargetName + "<br/>"+
            "Country: "+ targetDetail.Country + "<br/>"+
            "Employee Size: "+ targetDetail.EmployeeSize + "<br/>"+
            "Sector: "+ targetDetail.Sector + "<br/>"+
            "Target Name: "+ targetDetail.TargetName + "<br/>"+
            "Revenue: "+ targetDetail.Revenue + " bn<br/>"
            return item;
        }


    }





})();
