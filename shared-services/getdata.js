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
            getCountFromJSONFile: getCountFromJSONFile
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

    }
})();
