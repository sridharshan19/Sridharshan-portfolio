const fs = require('fs');
const path = require('path');

// Controller to get portfolio data
exports.getPortfolioData = (req, res) => {
  try {
    const dataPath = path.join(__dirname, '../data/portfolioData.json');
    const rawData = fs.readFileSync(dataPath, 'utf8');
    const portfolioData = JSON.parse(rawData);
    
    return res.status(200).json({
      success: true,
      data: portfolioData
    });
  } catch (error) {
    console.error('Error fetching portfolio data:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to retrieve portfolio data.',
      error: error.message
    });
  }
};
