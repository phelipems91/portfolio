const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BusinessContactSchema = new Schema({
    contactName: String,
    contactNumber: String,
    email: String
},
{
    collection: "businesscontacts"
});

module.exports = mongoose.model("BusinessContact", BusinessContactSchema);