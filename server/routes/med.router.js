var express = require('express');
var router = express.Router();
var Users = require('../models/userSchema.js');
var path = require('path');
var Medications = require('../models/medSchema.js');


// router.get('/', function(req, res, next) {
//     //console.log('get /register route');
//     res.sendFile(path.resolve(__dirname, '../public/views/templates/meds.html'));
//   });

// Handles POST request with new user data coming from logincontroller
router.post('/', function (req, res) {
  console.log('post /med route');
  // we turned the req.body into the schema we made
  var newMedicationToSave = new Medications(req.body);

  //This medication is now saved to the DB
  //Medications refers specifically to the schema.  See "Medications" as defined at the top of the file.

  //simple save using the variable we created using the schema and req.body
  newMedicationToSave.save(function (err, post) {
    console.log('post /medication -- Medication.create');
    if (err) {
      console.log('post /medication -- Medication.create -- failure');
      res.sendStatus(500);
    } else {
      console.log('post /medication  -- Medication.create -- success');
      res.sendStatus(201);
    }
  });
});

router.get('/', function(req,res){
  console.log('inside the med get router')
  medications.find({}, function(err, data){
    if (err) {
      console.log("find err:", err);
      res.sendStatus(500);
    } else {
      console.log('found data:', data);
      res.send(data);
    }//end of else
  }) //end medications.find
}); //end GET route

module.exports = router;
