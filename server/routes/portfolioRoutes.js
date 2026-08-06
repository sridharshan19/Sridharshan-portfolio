const express = require('express');
const router = express.Router();
const portfolioController = require('../controllers/portfolioController');

// Route to get all portfolio data
router.get('/', portfolioController.getPortfolioData);

module.exports = router;
