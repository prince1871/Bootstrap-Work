const mongoose = require('mongoose');

const schema = mongoose.Schema

const userSchema = new schema({
    firstName: {
        type: String,
        required: true
    },

    lastName: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },


    password: {
        type: String,
        required: true
    },

    isVerified: {
        type: Boolean,
        default: false,
    },

    verificationToken: {
        type: String,
        sparse: true,
    },

    verificationTokenExpiresIn: {
        type: Date,
        default: Date.now(),
    },

} , {timestamps: true}
);

const User = mongoose.model('User', userSchema);

module.exports = User;


