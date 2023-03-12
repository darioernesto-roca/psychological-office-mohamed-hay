const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home.controller');

router.get('/', homeController.index);
router.get('/inicio', homeController.index);

// Ruta para procesar el envío del formulario
router.post('/home', homeController.sendEmail);

module.exports = router;
