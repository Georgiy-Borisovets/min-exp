const User = require('../models/User');

module.exports = {
    create(req, res) {
        const user = new User(req.body);
        user.save((err, user) => {
            if (err) {
                res.send(err);
            }

            res.json(user);
        });
    },
    getAll(req, res) {
        const skip = 0;
        const limit = 20;

        User.find({}, null, { skip, limit }, (err, users) => {
            if (err) {
                res.send(err);
            }

            res.json(users);
        });
    },
    findById(req, res) {
        const { id } = req.params;
        User.findById(id, (err, user) => {
            if (err) {
                res.send(err);
            }

            res.json(user);
        });
    },
    update(req, res) {
        const { id } = req.params;
        const user = req.body;

        User.findOneAndUpdate({ _id: id }, user, { new: true }, (err, updatedUser) => {
            if (err) {
                res.send(err);
            }

            res.json(updatedUser);
        });
    },
    delete(req, res) {
        const { id } = req.params;
        User.remove({ _id: id }, (err, user) => {
            if (err) {
                res.send(err);
            }

            res.json({message: 'ok'});
        });
    },
};