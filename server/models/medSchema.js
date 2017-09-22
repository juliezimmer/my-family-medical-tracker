var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Define the newUser with a schema
var MedicationSchema = new Schema({
    medication : {type : String, required : true},
    prescriber: String,
    dose: String,
    frequency: String,
    startDate: Date,
    notes: String,
    username: String
});

module.exports = mongoose.model('Medication', MedicationSchema);

