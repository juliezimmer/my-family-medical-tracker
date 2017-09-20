var express = require('express');
var router = express.Router();
var Users = require('../models/userSchema.js');
var path = require('path');
var Surgeries = require('../models/surgerySchema.js');

// Handles POST request with new surgery data coming from the surgery service. 
router.post('/', function (req, res) {
  console.log('post /surgery route');
  // we turned the req.body into the schema we made
  var newSurgeryToSave = new Surgeries(req.body);

  //This surgery is now saved to the DB
  //Surgeries refers specifically to the schema.  
  //See "Surgeries" as defined at the top of the file.

  //simple save using the variable we created using the schema and req.body
  newSurgeryToSave.save(function (err, post) {
    console.log('post /surgery -- Surgery.create');
    if (err) {
      console.log('post /surgery -- Surgery.create -- failure');
      res.sendStatus(500);
    } else {
      console.log('post /surgery  -- Surgery.create -- success');
      res.sendStatus(201);
    }//end if/else to check for database query errors
  });// end saving surgeries to DB
});//end router.post route

//This router retreives all surgical procedures saved in the database for the current user to put them back on the DOM in the user view/profile page.
router.get('/', function(req,res){
  console.log('inside the surgery get router')
  Surgeries.find({}, function(err, data){
    if (err) {
      console.log("find err:", err);
      res.sendStatus(500);
    } else {
      console.log('found data:', data);
      res.send(data);//this data moves back into to surgery.service
    }//end of else
  }) //end Surgeries.find
}); //end GET route

module.exports = router;
