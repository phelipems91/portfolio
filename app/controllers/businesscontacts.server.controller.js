//Phelipe Matias da Silva - ID 301233605 - 10/19/2022

const mongoose = require('../../config/mongoose');
const BusinessContact = require('../models/businesscontact.server.model');

//Populate the business contacts collection if it is empty
exports.create = async (req, res, next) => {
    BusinessContact.find({},(error, doc) => {
        if(doc.length === 0){
            BusinessContact.init();
            let c1 = new BusinessContact(
            {
                "contactName" : "Alex G",
                "contactNumber" : "123-456-7890",
                "email" : "alex@alex.com"
            });
            let c2 = new BusinessContact(
            {
                "contactName" : "Carol C",
                "contactNumber" : "456-123-7890",
                "email" : "carol@carol.com"
            });
            let c3 = new BusinessContact(
            {
                "contactName" : "Jennifer A",
                "contactNumber" : "789-123-4560",
                "email" : "jennifer@jennifer.com"
            });

            c1.save();
            c2.save();
            c3.save();
        }
        next();
    });
};

//Render businesscontact.ejs passing variables for title, user logged in, and the contacts list if the business contacts collection is populated
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