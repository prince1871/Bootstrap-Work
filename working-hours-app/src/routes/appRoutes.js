const express = require('express');
const router = express.Router();

// Define the Home page route
router.get('/', (req, res) => {
    res.render('home');
});

// Define the Contact Us page route
router.get('/contact', (req, res) => {
    res.render('contact');
});

// Define the services page route
router.get('/services', (req, res) => {
    res.render('services');
});

module.exports = router;