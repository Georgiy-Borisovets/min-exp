const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        validate: value => {
            if (!validator.isEmail(value)) {
                throw new Error({ error: 'Invalid Email address' });
            }
        },
    },
    password: {
        type: String,
        required: true,
        minLength: 7,
    },
    tokens: [{
        token: {
            type: String,
            required: true,
        },
    }],
    created_date: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('User', userSchema);