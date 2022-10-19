//Phelipe Matias da Silva - ID 301233605 - 10/19/2022

const mongoose = require('../../config/mongoose');
const BusinessContact = require('../models/businesscontact.server.model');

//Render businesscontact.ejs passing variables for title, user logged in, and the contacts list
exports.render = function(req, res) {
    BusinessContact.find((err, contactsList) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            res.render('businesscontacts', {
            title: 'Business Contacts | Secure area',
            Contacts: contactsList,
            displayName: req.user ? req.user.username : ''});      
        }
    }).sort("contactName");
};

//Render updatecontact.ejs receiving the id of the document as a parameter and passing variables for title, contact, and username
exports.displayUpdatePage = (req, res, next) => {
    var id = req.params.id;

    BusinessContact.findById(id, (err, contact) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.render('updatecontact', {
            title: 'Update Contact | Secure area', 
            contact: contact, 
            displayName: req.user ? req.user.username : ''})
        }
    });
}

//Update the selected business contact according to the information passed in the form
exports.processUpdate = (req, res, next) => {
    let id = req.params.id

    let updatedContact = BusinessContact({
        "_id": id,
        "contactName": req.body.contactName,
        "contactNumber": req.body.contactNumber,
        "email": req.body.email
    });

    BusinessContact.updateOne({_id: id}, updatedContact, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/businesscontacts');
        }
    });
}

//Delete the selected business contact
exports.processDelete = (req, res, next) => {
    var id = req.params.id;

    BusinessContact.deleteOne({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
             res.redirect('/businesscontacts');
        }
    });
}