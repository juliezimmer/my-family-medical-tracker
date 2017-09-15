var express = require('express');
var router = express.Router();
var Users = require('../models/userSchema.js');
var path = require('path');



// Handles request for HTML file
router.get('/', function(req, res, next) {
  console.log('get /register route');
  res.sendFile(path.resolve(__dirname, '../public/views/templates/register.html'));
});

// Handles POST request with new user data coming from logincontroller
router.post('/', function(req, res, next) {
  console.log('post /register route');
  /*
  username: {type: String, required: true, index: {unique: true}},
  password: {type: String, required: true},
  recipes: {type: Array}
  */
    var userToSave = { //this is the request object
      //these variables on req.body MUST match what is used on the DOM in the lc.user.variable where the user enters their information
      username : req.body.username,
      password : req.body.password,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      dateOfBirth: req.body.dateOfBirth
      };
//This user is now saved to the DB
//Users refers specifically to the schema.  See "Users" as defined at the top of the file.
    Users.create(userToSave, function(err, post) {
      console.log('post /register -- User.create');
         if(err) {
           console.log('post /register -- User.create -- failure');
           res.sendStatus(500);
         } else {
           console.log('post /register -- User.create -- success');
           res.sendStatus(201);
         }
    });
});


module.exports = router;
