//Phelipe Matias da Silva - ID 301233605 - 10/17/2022

const config = require('./env/development');
const mongoose = require('mongoose');

//Database setup
module.exports = function() {
    const db = mongoose.connect(config.db, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => {
            console.log('MongoDB Connection Successful!');
        })
        .catch((error) => {
            console.log(error);
        })
    return db
};