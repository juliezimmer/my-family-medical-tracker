medicalApp.factory('UserService', function($http, $location){
  console.log('UserService Loaded');

  var userObject = {};

  return {
    userObject : userObject,

    getuser : function(){
      console.log('UserService -- getuser');
      $http({
        method: 'GET',
        url: '/user'
      }).then(function(response) { /*this function is added for authentication in the application. This verifies that the user is currently logged in and in a active session. */
          if(response.data.username) {
              // user has a curret session on the server
              userObject.userName = response.data.username; /* this contains the response with the username, which is an email address */
              userObject.firstname = response.data.firstname;//This contains the response with the user's firstname.
              userObject.allergies = response.data.allergies;
              //this contains the respons with the user's allergies
              userObject.dateOfBirth = response.data.dateOfBirth; /* this contains the response with the user's date of birth */
              console.log('UserService -- getuser -- User Data: ', userObject.userName);
              console.log("UserService first Name:", userObject.firstname);
          } else {
              console.log('UserService -- getuser -- failure');
              // user has no session, bounce them back to the login page
              $location.path("/home");
          }
      },function(response){
        console.log('UserService -- getuser -- failure: ', response);
        $location.path("/home");
      });
    },

    logout : function() {
      console.log('UserService -- logout');
      $http.get('/user/logout').then(function(response) {
        console.log('UserService -- logout -- logged out');
        $location.path("/home");
      });
    }
  };
});
