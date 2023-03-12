const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contact.controller');

router.get('/', contactController.get);

// Ruta para procesar el envío del formulario
router.post('/', contactController.sendEmail);

module.exports = router;
