var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Define the newUser with a schema
var SurgerySchema= new Schema({
    procedure: String,
    date: Date,
    hospital: String,
    surgeon: String,
    notes: String,
    username: String
    });

module.exports = mongoose.model('Surgery', SurgerySchema);