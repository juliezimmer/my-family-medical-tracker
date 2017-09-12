var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Define the newUser with a schema
var MedicationSchema = new Schema({
    medication : {type: String},
    prescriber: {type: String},
    dose: {type: String},
    frequency: {type: String},
    startDate: {type: Date},
    notes: {type: String}
});

module.exports = mongoose.model('Medication', MedicationSchema);

