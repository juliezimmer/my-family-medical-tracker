var express = require('express');
var router = express.Router();
var Users = require('../models/userSchema.js');
var path = require('path');
var Providers = require('../models/providerSchema.js');

//Handles Post request with new provider data coming from ProviderService file.
router.post('/', function (req,res){
    console.log('post route for providers has been hit');
    var providerObject = req.body;
    console.log('req.user on line 11 provider.router.js:', req.body);
    providerObject.username = req.user.username;
    var newProviderToSave = new Providers(providerObject);
/* provider now saved to DB
"Providers" refers specifically to the schema and var Providers on line 5 pulls the providerSchema in. */
    newProviderToSave.save(function (err, post){
        console.log('Provider.create post');
        if (err) {
            console.log('post/provider- Provider.create has failed');
            res.sendStatus(500);
        } else {
            console.log('post/provider - Provider.create is successful!');
            res.sendStatus(201);
        }//end error check
    });//end saving new Provider to DB
});// end router.post route 

//This router retreives all providers saved in the database for the current user to put them back on the DOM in the user view/profile page.
router.get('/', function(req,res){
    console.log('req.user in provider.router.js line 30 "GET" route:' , req.user);
    Providers.find({'username' : req.user.username}, function (err, data){
        if (err) {
            console.log('find err:', err); 
            res.sendStatus(500);
        } else {
            console.log('found providers:', data);
            res.send(data); //this 'data' moves back to provider.service
        }//end of else to check for query errors
    })// end of Providers.find
});//end router.get route

router.put('/', function (req,res){
    console.log('put route for providers has been hit');
    var providerObject = req.body;
    console.log('req.user on line 45 provider.router.js:', req.body);
    providerObject.username = req.user.username;
    console.log('providerObject to save line 47 in provider.router.js:', providerObject);
    var providerUpdated = new Providers(providerObject);
  
    /*"Providers" refers specifically to the schema and var Providers on line 5 pulls the providerSchema in. */
    Providers.findByIdAndUpdate( 
        { _id: providerObject._id },
        { $set: { name: providerObject.name,
                  specialty: providerObject.specialty,
                  location: providerObject.location,
                  phone: providerObject.phone}
                },
        function(err, data) { 
            if (err) {
                console.log('update error: ', err);
                res.sendStatus(500);
            } else {
                res.sendStatus(200);

            }//end if/else statement
         });//end saving updated Provider to DB
    });// end router.put route 

router.delete('/:id', function(req,res){
    console.log('delete route for providers has been hit');
    Providers.findByIdAndRemove(
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