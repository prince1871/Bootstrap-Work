const express = require('express');
const path = require('path');
const app = express();
const workingHours = require('./src/middleware/workingHours');
const appRoutes = require('./src/routes/appRoutes');

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Set the views directory
app.set('views', path.join(__dirname, 'src/views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to check if the request is made during working hours
app.use(workingHours);

// Routes
app.use('/', appRoutes);


module.exports = app;