const fs = require('fs/promises');
const path = require('path');

const MESSAGES_PATH = path.join(__dirname, '../data/messages.json');

exports.submitContactMessage = async (req, res) => {
  try {
    const { user_name, user_email, subject, message } = req.body || {};

    if (!user_name?.trim() || !user_email?.trim() || !subject?.trim() || !message?.trim()) {
      return res.status(400).json({
        success: false,
        message: 'All fields (name, email, subject, and message) are required.'
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(user_email.trim())) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address.'
      });
    }

    let existing = [];
    try {
      const raw = await fs.readFile(MESSAGES_PATH, 'utf8');
      existing = JSON.parse(raw);
      if (!Array.isArray(existing)) existing = [];
    } catch {
      existing = [];
    }

    const entry = {
      id: Date.now().toString(),
      name: user_name.trim(),
      email: user_email.trim(),
      subject: subject.trim(),
      message: message.trim(),
      createdAt: new Date().toISOString()
    };

    existing.push(entry);
    await fs.writeFile(MESSAGES_PATH, JSON.stringify(existing, null, 2), 'utf8');

    return res.status(201).json({
      success: true,
      message: 'Message delivered to portfolio server.'
    });
  } catch (error) {
    console.error('Error saving contact message:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to process contact message.'
    });
  }
};
