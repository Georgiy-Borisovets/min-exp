const Verb = require('../models/Verb');

module.exports = {
    getAll(req, res, next) {
        Verb.find({}, (err, verbs) => {
            if (err) {
                return next(err);
            }

            return res.json(verbs);
        });
    },
};