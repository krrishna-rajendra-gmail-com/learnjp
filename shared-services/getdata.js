(function() {
    'use strict';
    angular
        .module('app')
        .factory('dataService', dataService);
    
    dataService.$inject = ['$http','$log'];

    function dataService($http,$log) {
        
        var service = {
            getDetailsFromJSONFile: getDetailsFromJSONFile,
            getCurrentDate: getCurrentDate,
            getCurrentDateWithCallback: getCurrentDateWithCallback,
            getCountFromJSONFile: getCountFromJSONFile,
            deleteItem: deleteItem,
            viewItem: viewItem

        };
        return service;

        //getting data from JSON file.
        function getDetailsFromJSONFile (path, callBack){
               var targetDetailsAll = [];
               $http.get(path).then(function(res){ 
                    if(res !=null){
                        targetDetailsAll = res.data;
                        callBack(targetDetailsAll);
                    }
                }, function(res){
                    $log.log("Error: "+ res);
                });
        }

        //getting count from JSON file.
        function getCountFromJSONFile (path, callBack){
               var count = 0;
               $http.get(path).then(function(res){ 
                    if(res !=null){
                        count = res.data.length;
                        callBack(count);
                    }
                }, function(res){
                    $log.log("Error: "+ res);
                });
        }

        //getting date based in US/UK Format.
        function getCurrentDate(isFormatted){
            var date = new Date();
            if(isFormatted){
                    date = (date.getMonth()+1)+ "/" + date.getDate() + "/" + date.getFullYear();
            }
            else{
                    date = date.getDate() + "/" + (date.getMonth()+1) +  "/" + date.getFullYear();
            }
            return date;
        }

        //getting date based in US/UK Format. with call back for learning.
         function getCurrentDateWithCallback(isFormatted, callBack){
            var date = new Date();
            if(isFormatted){
                    date = (date.getMonth()+1)+ "/" + date.getDay() + "/" + date.getFullYear();
            }
            else{
                    date = date.getDay() + "/" + (date.getMonth()+1) +  "/" + date.getFullYear();
            }
            callBack(date);
        }

        function deleteItem(ID) {
            //Console.log("ID : "+ ID);
            var filters_to_remove = [], index = null;

            // _.each(vm.targetDetailsAll, function(item, index) {
            //     if (item.ID === ID) {
            //         filters_to_remove.push(index);
            //     }
            // });

            // while ((index = filters_to_remove.pop()) != null) {
            //     vm.targetDetailsAll.splice(index, 1);
            // }
            popupConfirm(ID);
        }

        function popupConfirm(ID){
            BootstrapDialog.show({
                        type: BootstrapDialog.TYPE_WARNING,
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
                        title: 'Details',
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
