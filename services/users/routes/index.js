const express = require('express');
const router = express.Router();

const userController = require('../controllers/user');

router.route('/')
    .get(userController.getAll)
    .post(userController.create);

router.route('/:id')
    .get(userController.findById)
    .put(userController.update)
    .delete(userController.delete);

module.exports = (app) => {
    app.use('/users', router);
};