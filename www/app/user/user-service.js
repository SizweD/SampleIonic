/* Service for logged in User*/
angular.module('user.userService', [])
.factory('userService',  function () {

    var userService = {
  
    };

    /* Constructor */
    userService.User = function(userData){
        angular.extend(this, userData);
    };
	
    return userService;

});

