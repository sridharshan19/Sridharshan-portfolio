import { fallbackPortfolioData } from '../constants/portfolioData';

const API_URL = import.meta.env.VITE_PORTFOLIO_API_URL || 'http://localhost:5005/api/portfolio';
const CONTACT_API_URL = API_URL.replace(/\/api\/portfolio\/?$/, '/api/contact');

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

export const submitContactForm = async (formData) => {
  const response = await fetch(CONTACT_API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  });

  const result = await response.json().catch(() => ({}));
  if (!response.ok || !result?.success) {
    throw new Error(result?.message || `Request failed with status ${response.status}`);
  }
  return result;
};
