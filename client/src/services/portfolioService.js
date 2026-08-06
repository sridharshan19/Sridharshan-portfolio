import { fallbackPortfolioData } from '../constants/portfolioData';

const API_URL = import.meta.env.VITE_PORTFOLIO_API_URL || 'http://localhost:5005/api/portfolio';

export const fetchPortfolioData = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();
    if (result && result.success && result.data) {
      return result.data;
    }
    return fallbackPortfolioData;
  } catch (error) {
    console.warn('Backend API request failed, falling back to local dataset.', error);
    return fallbackPortfolioData;
  }
};
