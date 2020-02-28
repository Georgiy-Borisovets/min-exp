const jwt = require('jsonwebtoken');
const User = require('../models/User');

const notAuthorized = (res) => {
    res.status(401).send({ error: 'Not authorized to access this resource' })
};

const auth = (req, res, next) => {
    const authHeader = req.header('Authorization');
    if (!authHeader) {
        notAuthorized(res);
    }

    const token = req.header('Authorization').replace('Bearer ', '');
    const data = jwt.verify(token, process.env.JWT_SECRET);

    User.findOne({ _id: data._id, 'tokens.token': token }, (err, user) => {
        if (err || !user) {
            notAuthorized(res);
        }

        req.user = user;
        req.token = token;
        next();
    });
};

module.exports = auth;