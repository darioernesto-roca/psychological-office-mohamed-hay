const express = require('express');
const router = express.Router();

// Imports blog controller
const blogController = require('../controllers/blog.controller');
console.log(blogController);

// Define route for blog
router.get('/', blogController.index);

// Exports the module
module.exports = router;
