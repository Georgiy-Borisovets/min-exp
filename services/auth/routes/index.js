const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');

// router.route('/users')
//     .get(userController.getAll)
//     .post(userController.create);
//
// router.get('/me', auth, userController.currentUser);
// router.post('/logout', auth, userController.logout);
//
// router.route('/components')
//     .post(userController.components);
//
// router.route('/:id')
//     .get(userController.findById)
//     .put(userController.update)
//     .delete(userController.delete);

router.get('/', userController.auth);
router.post('/signup', userController.create);
router.post('/login', userController.login);
router.post('/logout', userController.logout);

module.exports = router;
