var express = require('express');
var router = express.Router();
var Users = require('../models/userSchema.js');
var path = require('path');
var Providers = require('../models/providerSchema.js');

//Handles Post request with new provider data coming from ProviderService file.
router.post('/', function (req,res){
    console.log('post route for providers has been hit');
    var newProviderToSave = new Providers(req.body);
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
    console.log('inside provider "GET" router');
    Providers.find({}, function (err, data){
        if (err) {
            console.log('found user providers:', data);
            res.sendStatus(500):
        } else {
            console.log('found providers:', data);
            res.send(data); //this 'data' moves back to provider.service
        }//end of else to check for query errors
    })// end of Providers.find
})//end router.get route

module.exports = router;