const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

router.get('/contactAdmin', contactController.contact);

module.exports = router;
