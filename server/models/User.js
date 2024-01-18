const mongoose = require('mongoose');
const Cryptr = require('cryptr');
const cryptr = new Cryptr(process.env.SECRET_KEY);

const Schema = new mongoose.Schema({
    firstName: {
        type: String,
        default: "User",
    },
    googleId: {
        type: String,
        required: true,
    },
    profileImage: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    }

});

module.exports =  mongoose.model('User', Schema);