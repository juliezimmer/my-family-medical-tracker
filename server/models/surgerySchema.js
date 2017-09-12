var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Define the newUser with a schema
var SurgerySchema= new Schema({
    procedure: {type: String},
    date: {type: Date},
    hospital: {type: String},
    surgeon: {type: String},
    notes: {type: String}
    });

module.exports = mongoose.model('Surgery', SurgerySchema);