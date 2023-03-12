//routes/index.js
const express = require('express');
const router = express.Router();

const homeRoutes = require('./home.routes');
const blogRoutes = require('./blog.routes');
const postRoutes = require('./post.routes');
const serviceRoutes = require('./services.routes');
const usRoutes = require('./us.routes');
const contactRoutes = require('./contact.routes');

router.use('/', homeRoutes);
router.use('/blog', blogRoutes);
router.use('/posts', postRoutes);
router.use('/servicios', serviceRoutes);
router.use('/nosotros', usRoutes);
router.use('/contacto', contactRoutes);

module.exports = router;