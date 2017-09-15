var express = require('express');
var router = express.Router();
var Users = require('../models/userSchema.js');
var path = require('path');
var Medications = require('../models/medSchema.js');


router.get('/', function(req, res, next) {
    console.log('get /register route');
    res.sendFile(path.resolve(__dirname, '../public/views/templates/meds.html'));
  });
  
  // Handles POST request with new user data coming from logincontroller
  router.post('/', function(req, res, next) {
    console.log('post /register route');
    
      var medicationToSave = { //this is the request object
        //these variables on req.body MUST match what is used on the DOM in the mc.medication.variable where the user enters their information
        medication : req.body.medication,
        prescriber : req.body.prescriber,
        dose: req.body.dose,
        frequency: req.body.frequency,
        startDate: req/body/startDate,
        notes: req.body.notes
        };

    //This medication is now saved to the DB
    //Medications refers specifically to the schema.  See "Medications" as defined at the top of the file.
    Medications.create(medicationToSace, function(err, post) {
        console.log('post /medication -- Medication.create');
           if(err) {
             console.log('post /medication -- Medication.create -- failure');
             res.sendStatus(500);
           } else {
             console.log('post /medication  -- Medication.create -- success');
             res.sendStatus(201);
           }
      });
  });
  
  
  module.exports = router;
    