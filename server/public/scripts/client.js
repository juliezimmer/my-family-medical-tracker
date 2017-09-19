var medicalApp = angular.module('medicalApp', ['ngRoute']);

//These route the user to different views depending on the url
medicalApp.config(function($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');
  console.log('medicalApp -- config')
  $routeProvider
    .when('/home', {
      templateUrl: '/views/templates/home.html',
      controller: 'LoginController as lc',
    })
    .when('/register', {
      templateUrl: '/views/templates/register.html',
      controller: 'LoginController as lc'
    })
    .when('/user', {
      templateUrl: '/views/templates/user.html',
      controller: 'UserController as uc',
      resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
    })
    .when('/meds', {
       templateUrl: '/views/templates/meds.html',
       controller: 'MedController as mc',
       resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
    })
    .when('/doctor', {
      templateUrl: '/views/templates/doctor.html',
      controller:'DoctorController as dc' 
    })
    .when('/surgery', {
      templateUrl: '/views/templates/surgery.html',
      controller: 'SurgeryController as sc'
    })
    .otherwise({
      redirectTo: '/home'
    });
});
