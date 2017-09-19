var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Define the newUser with a schema
var ProviderSchema = new Schema({
    name: {type: String, required: true},
    specialty: String, 
    location: String,
    phone: String
});

module.exports = mongoose.model('Provider', ProviderSchema);