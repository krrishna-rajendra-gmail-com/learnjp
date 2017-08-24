(function() {
    'use strict';

    angular
        .module('app')
        .directive('boxview', boxview);

    function boxview() {
        var directive = {
            templateUrl: '/shared-components/app.boxview.directive.html'
        };
        return directive;
    }
    
})();
