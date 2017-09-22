var express = require('express');
var router = express.Router();
var Users = require('../models/userSchema.js');
var path = require('path');
var Surgeries = require('../models/surgerySchema.js');

// Handles POST request with new surgery data coming from the surgery service. 
router.post('/', function (req, res) {
  console.log('post /surgery route');
  // we turned the req.body into the schema we made
var surgeryObject = req.body;
console.log('req.body line 12 in surgery.router.js:',req.body);
surgeryObject.username = req.user.username;
var newSurgeryToSave = new Surgeries(surgeryObject);

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
  console.log('req.user inside surgery.router.js line35:', req.user); 
  Surgeries.find({'username': req.user.username},           function(err, data){
        if (err) {
          console.log("find err:", err);
          res.sendStatus(500);
        } else {
          console.log('found data:', data);
          res.send(data);//this data moves back into to surgery.service
        }//end of else
    }) //end Surgeries.find
}); //end GET route

router.put('/', function (req,res){
  console.log('"put" route for surgery has been hit in surgery.router.js');
  var surgeryObject = req.body;
  console.log('req.user on line 50 in  surgery.router.js:', req.body);
  surgeryObject.username = req.user.username;
  console.log('surgeryObject to save on line 52 in surgery.router.js:', surgeryObject);
  var surgeryUpdated = new Surgeries(surgeryObject);

  /*"Surgeries" refers specifically to the schema and var Surgeries on line 5 pulls the surgerySchema in. */
  Surgeries.findByIdAndUpdate( 
      { _id: surgeryObject._id },
      { $set: { procedure: surgeryObject.procedure,
                date: surgeryObject.date,
                hospital: surgeryObject.hospital,
                surgeon: surgeryObject.surgeon,
                notes: surgeryObject.notes}
              },
      function(err, data) { 
          if (err) {
              console.log('update error: ', err);
              res.sendStatus(500);
          } else {
              res.sendStatus(200);

          }//end if/else statement
       });//end saving updated Surgery to DB
  });// end router.put route 

  router.delete('/:id', function(req,res){
    console.log('delete route for surgeries has been hit');
    Surgeries.findByIdAndRemove(
        { _id: req.params.id },
        function(err, data){
            if (err) {
                console.log('delete error:', err);
                res.sendStatus(500);
            } else {
                res.sendStatus(200);
            }
        }
    );
});
  
module.exports = router;
