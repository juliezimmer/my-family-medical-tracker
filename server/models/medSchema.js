var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Define the newUser with a schema
var MedicationSchema = new Schema({
    medication : String,
    prescriber: String,
    dose: String,
    frequency: String,
    startDate: Date,
    notes: String,
    userId: String
});

module.exports = mongoose.model('Medication', MedicationSchema);

