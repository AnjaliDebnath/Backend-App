const express = require('express');
const router = express.Router();

const BlogPost=require('../models/Schema');

// GET / - Welcome message
router.get('/', (req, res) => {
    res.send('Welcome to the Blog API!');
});



// Start the server
module.exports = router;
