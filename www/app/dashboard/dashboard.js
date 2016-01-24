 (function(){
    'use strict';
	
	angular.module('dashboard', [])

	.config( function($stateProvider) {
		$stateProvider
		.state('dashboard', {
			url: "/dashboard",
			templateUrl: "app/dashboard/dashboard.html",
			controller: "DashboardController",
            controllerAs: "dashboard",
            resolve: {
                userData: function($q, userService){
                    var deferred = $q.defer();
                    // Manipulate user data if required
                    deferred.resolve(userService);


                    return deferred.promise;
                }
            }
		});
	})
        
	.controller('DashboardController', DashboardController)

    function DashboardController($scope, userService, $state, userData){
        var vm = this;

        vm.firstName = userData.Firstname;
        vm.lastName = userData.Lastname;
    }

})();
