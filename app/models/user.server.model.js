const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema
(
    {
        username: {
            type: String,
            default: '',
            trim: true,
            required: 'Username is required'
        },
        /*password: {
            type: String,
            default: '',
            trim: true,
            required: 'Password is required'
        },*/
        email: {
            type: String,
            default: '',
            trim: true,
            required: 'Email is required'
        },
    },
    {
        collection: 'users'
    }
);

let options = ({ missingPasswordError: 'Wrong / Missing Password'});
UserSchema.plugin(passportLocalMongoose, options);

module.exports = mongoose.model("User", UserSchema);