const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

// Route to submit a contact message
router.post('/', contactController.submitContactMessage);

module.exports = router;
