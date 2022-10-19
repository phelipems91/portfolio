//Phelipe Matias da Silva - ID 301233605 - 10/19/2022

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create a model for business contact
const BusinessContactSchema = new Schema({
    contactName: String,
    contactNumber: String,
    email: String
},
{
    collection: "businesscontacts"
});

module.exports = mongoose.model("BusinessContact", BusinessContactSchema);