const express = require('express');
const router = express.Router();

router.route('/')
    .get(function(req, res) {
        const data = {
            id: 1,
            name: 'Some User Name',
            description: 'Some Description',
        };
        db.

        res.status(200).send(data);
    });

module.exports = function(app, db) {
    app.use('/users', router);
};