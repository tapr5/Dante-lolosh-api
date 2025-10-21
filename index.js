const express = require('express');
const app = express();

// مثال Route رئيسية
app.get('/', (req, res) => {
  res.send('🚀 Hello from Vercel Express app!');
});

// Route أخرى كمثال
app.get('/hello', (req, res) => {
  res.json({ message: 'Hello World 🌍' });
});

// تصدير التطبيق لاستخدامه كـ Serverless function
module.exports = app;
