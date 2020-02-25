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

userSchema.pre('save', async function(next) {
    const user = this;
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8);
    }
    next();
});

userSchema.methods.generateAuthToken = async function() {
    const user = this;
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
    user.tokens = user.tokens.concat(token);
    await user.save();
    return token;
};

userSchema.statics.findByCredentials = async (email, password) => {
    const error = 'Invalid login credentials';
    const user = await User.findOne({ email });
    if (!user) {
        throw new Error(error);
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
        throw new Error(error);
    }
    return user;
};

const User = mongoose.model('User', userSchema);

module.exports = User;
