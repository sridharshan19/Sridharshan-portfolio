const fs = require('fs/promises');
const path = require('path');

const DATA_PATH = path.join(__dirname, '../data/portfolioData.json');
let cachedPortfolioData = null;

// Controller to get portfolio data
exports.getPortfolioData = async (req, res) => {
  try {
    if (!cachedPortfolioData || process.env.NODE_ENV === 'development') {
      const rawData = await fs.readFile(DATA_PATH, 'utf8');
      cachedPortfolioData = JSON.parse(rawData);
    }

    return res.status(200).json({
      success: true,
      data: cachedPortfolioData
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
