medicalApp.controller('UserController', function(UserService) {
  console.log('UserController created');
  var vm = this;
  
  // controls the logout button
  vm.userService = UserService;

  // username / password / whatever you got of current user
  vm.userObject = UserService.userObject;
  
  
  
 });
