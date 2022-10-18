const mongoose = require('../../config/mongoose');
const BusinessContact = require('../models/businesscontact.server.model');

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
    });
};

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
            res.render('updatecontact', {title: 'Update Contact | Secure area', contact: contact, 
            displayName: req.user ? req.user.username : ''})
        }
    });
}

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

exports.processDelete = (req, res, next) => {
    var id = req.params.id;

    BusinessContact.remove({_id: id}, (err) => {
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