const express = require('express');
const routes = require('./routes');

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use('/api', routes);

module.exports = app; // Mengexport app agar dapat digunakan oleh Vercel
