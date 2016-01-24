(function(){
	'use strict';
	
	var AuthorizeUser = angular.module('user.AuthorizeUserService', []);
	
	AuthorizeUser.factory("AuthorizeUserService", function($q, $timeout, $http) {
		return {
			checkUser: function(username, password){
				var deferred = $q.defer();
				$http({
						method: 'GET',
						dataType: 'json',
						url: 'http://www.example.com/authenticate' ,
						data: ''
					})
					.success(function (data, status, headers, config) {
						// $timeout(function(){
						// 		deferred.resolve({Firstname: "CESTEST", Lastname: "Demo"});
						// }, 2000);
					})
					.error(function (data, status, headers, config) {
						if(status == 0){
							$timeout(function(){
								var userData = {Firstname: "CESTEST", Lastname: "Demo"};
								
								deferred.resolve(userData);
							}, 2000);
						}

						// Handle errors
						//deferred.reject(status);
					});	

				return deferred.promise;	
			}
		};	
	});


})();