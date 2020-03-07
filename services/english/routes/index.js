const express = require('express');
const router = express.Router();
const verbController = require('../controllers/verb');

router.get('/verbs', verbController.getAll);

module.exports = router;