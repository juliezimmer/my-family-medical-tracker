medicalApp.controller('UserController', function(UserService, MedService) {
  console.log('UserController created');
  
  //call the getMed() here
  //source in MedService
  //"this" indicates or refers to UserService
  var vm = this;
  
  // controls the logout button
  vm.userService = UserService;

  // username / password / whatever you got from current user
  vm.userObject = UserService.userObject;
  
  /*vm.getMed = function() {
    console.log('getMed function has been accessed');
    MedService.getMed(vm.medObject);*/
});
