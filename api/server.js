const express = require('express');
const routes = require('./routes');

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use('/', routes);

module.exports = app;