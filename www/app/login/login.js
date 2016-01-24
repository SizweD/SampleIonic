 (function(){
    'use strict';
	
	var Login = angular.module('login', ['user.AuthorizeUserService', 'user.userService', 'usernameText']);

	Login.config( function($stateProvider) {
		$stateProvider
		.state('login', {
			url: "/login",
			templateUrl: "app/login/login.html",
			controller: "LoginController",
            controllerAs: "login",
            resolve: {
            }
		});
	});
        
	Login.controller('LoginController', LoginController);	

    function LoginController($scope, AuthorizeUserService, userService, $state){
        var vm = this;

        vm.signIn = function(user){
            console.log(user);

            AuthorizeUserService.checkUser(user.username, user.password).then(function(userData){
                userService.User(userData);
                console.log(userService);

                $state.go('dashboard');
            }, function(errorStatus){
                // errorStatusHandler
            });
        }
    }

})();
