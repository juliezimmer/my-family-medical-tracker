medicalApp.controller('LoginController', function($http, $location, UserService) {
    console.log('LoginController created');
    var vm = this;
    vm.user = {
      username: '',
      password: ''
    };
    vm.message = '';

    vm.login = function() {
      console.log('LoginController -- login');
      /* the code on line 13 checks for the presence of a username and password being enterd in the text fields on the DOM.  If nothing has been entered, a message is returned that says: Enter your username and password. */
      if(vm.user.username === '' || vm.user.password === '') {
        vm.message = "Enter your username and password!";
      } else {
        console.log('LoginController -- login -- sending to server...', vm.user);
        $http.post('/', vm.user).then(function(response) {
          if(response.data.username) {
            console.log('LoginController -- login -- success: ', response.data);
           
            // location works with SPA (ng-route)
            $location.path('/user'); // http://localhost:5000/#/user
          } else {
            console.log('LoginController -- login -- failure: ', response);
            vm.message = "Wrong!!";
          }
        }).catch(function(response){
          console.log('LoginController -- registerUser -- failure: ', response);
          vm.message = "Wrong!!";
        });
      }
    };

    vm.registerUser = function() {
      console.log('LoginController -- registerUser');
      // below says we can't register a new user if the username field and the password field are blank
      if(vm.user.username === '' || vm.user.password === '') {
        vm.message = "Choose a username and password!";
      } else {
        console.log('LoginController -- registerUser -- sending to server...', vm.user); // vm.user is the object that is created when the user registers and fills in the text boxes. Shown in the DOM register.html as lc.user.
        $http.post('/register', vm.user).then(function(response) {
          console.log('LoginController -- registerUser -- success');
          $location.path('/home');
        }).catch(function(response) {
          console.log('LoginController -- registerUser -- error');
          vm.message = "Please try again."
        });
      }
    }
    vm.sendMail = function() { //need to communicate with the mail.router.js file
      console.log('sendMail has been clicked');
     //send user's email through this http.post requeste
      $http.post('/mail').then(function(response) {
        console.log('This is the response:', response);
        })

    };

}); //end of controller
