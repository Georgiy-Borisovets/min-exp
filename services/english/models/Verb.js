const mongoose = require('mongoose');

const verbSchema = mongoose.Schema({
    infinitive: {
        type: String,
        required: true,
        trim: true,
    },
    presentParticiple: {
        type: String,
        required: true,
        trim: true,
    },
    past: {
        type: String,
        required: true,
        trim: true,
    },
    pastParticiple: {
        type: String,
        required: true,
        trim: true,
    },
    translation: {
        type: String,
        required: true,
        trim: true,
    },
});

const Verb = mongoose.model('Verb', verbSchema);

module.exports = Verb;