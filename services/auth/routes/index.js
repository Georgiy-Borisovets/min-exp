const express = require('express');
const router = express.Router();

const userController = require('../controllers/user');
const auth = require('../middlewares/auth.js');

router.route('/users')
    .get(userController.getAll)
    .post(userController.create);

router.get('/me', auth, userController.currentUser);
router.post('/logout', auth, userController.logout);

router.route('/login')
    .post(userController.login);

router.route('/:id')
    .get(userController.findById)
    .put(userController.update)
    .delete(userController.delete);

module.exports = router;
