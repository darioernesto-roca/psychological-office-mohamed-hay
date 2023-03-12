const express = require('express');
const router = express.Router();

const postsController = require('../controllers/post.controller');

router.get('/:id', postsController.showPost);

module.exports = router;
