const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

// Load environment variables
dotenv.config({ path: path.join(__dirname, '.env') });

const app = express();
const PORT = process.env.PORT || 5005;
const allowedOrigins = process.env.CORS_ORIGIN
  ? process.env.CORS_ORIGIN.split(',').map((origin) => origin.trim())
  : null;

// Enable CORS
app.use(
  cors(
    allowedOrigins
      ? {
          origin: allowedOrigins,
          methods: ['GET', 'POST']
        }
      : undefined
  )
);

// Parse JSON bodies
app.use(express.json());

// Routes
const portfolioRoutes = require('./routes/portfolioRoutes');
const contactRoutes = require('./routes/contactRoutes');
app.use('/api/portfolio', portfolioRoutes);
app.use('/api/contact', contactRoutes);

// Base route status
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Sridharshan M N Portfolio API',
    status: 'Online',
    endpoints: {
      portfolio: '/api/portfolio',
      contact: '/api/contact'
    }
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Route not found: ${req.originalUrl}`
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error('Unhandled server error:', err);
  res.status(500).json({
    success: false,
    message: 'Internal server error'
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
