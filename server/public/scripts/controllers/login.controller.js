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
      /* the code on line 13 checks for the presence of a username and password being enterd in the text fields on the DOM.  If nothing has been entered, a message is returned that says: Enter a username and password. */
      if(vm.user.username === '' || vm.user.password === '') {
        vm.message = "Enter a username and password!";
      } else {/* if something IS entered in the username and password text fields, move on to make $http POST request */
        console.log('LoginController -- login -- sending to server...', vm.user);
        $http.post('/', vm.user).then(function(response) {/*making $http POST request to the database that will start a session on the user */ 
          if(response.data.username) { /* if the username and password match an existing user... */
            console.log('LoginController -- login -- success: ', response.data);
           
            // location works with SPA (ng-route)
            $location.path('/user'); /* if the user matches existing user, this routes them to their profile page at '/user', which is the user.html view */ 
          } else { /* if username and pw are incorrect, a message displays on the DOM */
            console.log('LoginController -- login -- failure: ', response);
            vm.message = "username and/or password are incorrect. Please try again.";
          }
        }).catch(function(response){
          console.log('LoginController -- registerUser -- failure: ', response);
          vm.message = "username and/or password are incorrect. Please try again.";
        });
      }
    };

    vm.registerUser = function() { /*runs when 'Not a Member? Register Here!'is clicked on the login page */
      console.log('LoginController -- registerUser');
      // below says we can't register a new user if the username field and the password field are blank
      if(vm.user.username === '' || vm.user.password === '') {/*runs if all username and password fields have not been properly filled in. This kicks off the $http POST request that will store the new user in the DB */
        vm.message = "Choose a username and password!";
      } else { //if fields have been properly filled in
        console.log('LoginController -- registerUser -- sending to server...', vm.user); /* vm.user is the object that is created when the user registers and fills in the text boxes. This is on register.html as lc.user. */
        $http.post('/register', vm.user).then(function(response) {
          console.log('LoginController -- registerUser -- success');
          $location.path('/home'); /* after the user has successfully created an account, this takes them back to login page to login in. */
        }).catch(function(response) {
          console.log('response:', response);
          console.log('LoginController -- registerUser -- error');
          vm.message = "Please try again."
        });
      }
    }
    //nodemailer
    vm.sendMail = function() { //need to communicate with the mail.router.js file
      console.log('sendMail has been clicked');
     //send user's email through this http.post requeste
      $http.post('/mail').then(function(response) {
        console.log('This is the response:', response);
        })

    };

}); //end of controller
