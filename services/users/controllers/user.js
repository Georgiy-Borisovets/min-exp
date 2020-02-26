const User = require('../models/User');

module.exports = {
    create(req, res, next) {
        const user = new User(req.body);
        return user.save()
            .then(user => {
                return user.generateAuthToken();
            })
            .then(token => {
                return res.json({ user, token });
            })
            .catch(next);
    },
    getAll(req, res, next) {
        const skip = 0;
        const limit = 20;

        User.find({}, null, { skip, limit }, (err, users) => {
            if (err) {
                next(err);
            }

            res.json(users);
        });
    },
    findById(req, res, next) {
        const { id } = req.params;
        User.findById(id, (err, user) => {
            if (err) {
                next(err);
            }

            res.json(user);
        });
    },
    update(req, res, next) {
        const { id } = req.params;
        const user = req.body;

        User.findOneAndUpdate({ _id: id }, user, { new: true }, (err, updatedUser) => {
            if (err) {
                next(err);
            }

            res.json(updatedUser);
        });
    },
    delete(req, res) {
        const { id } = req.params;
        User.findById(id, (err, user) => {
            if (err) {
                res.send(err);
            }

            user.deleteOne().then(() => {
                res.json({ message: 'ok' });
            });
        });
    },
    login(req, res) {
        const { email, password } = req.body;
        let verifiedUser = null;
        User.findByCredentials(email, password)
            .then(user => {
                if (!user) {
                    return res.status(401).send({ error: 'Login failed!' });
                }

                verifiedUser = user;

                return user.generateAuthToken();
            })
            .then(token => {
                return res.send({ verifiedUser, token });
            })
            .catch(err => {
                res.status(400).send(err);
            });
    },
    currentUser(req, res) {
        res.json(req.user);
    },
    logout(req, res, next) {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token
        });
        req.user.save()
            .then(() => {
                res.send({ message: 'ok' });
            })
            .catch(next);
    },
};
