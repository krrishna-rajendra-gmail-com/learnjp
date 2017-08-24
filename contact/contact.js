(function() {
    'use strict';

    angular
        .module('app')
        .controller('ContactController', ContactController);

    ContactController.$inject = [
        '$scope', '$rootScope', '$http'
    ];

    function ContactController($scope, $rootScope, $http) {
        var vm  = this;
		vm.date = "This is from contact form...";
	}

})();