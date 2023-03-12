const express = require("express");
const { check } = require("express-validator");
const router = express.Router();
const homeController = require("../controllers/home.controller");

router.get("/", homeController.index);
router.get("/inicio", homeController.index);

// Route to process the form sending
router.post(
  "/home",
  [
    check("name", "El nombre es requerido").notEmpty(),
    check("phone", "El teléfono es requerido").notEmpty(),
    check("email", "El correo electrónico es requerido").notEmpty(),
    check("email", "El correo electrónico no es válido").isEmail(),
    check("message", "El mensaje es requerido").notEmpty(),
  ],
  homeController.sendEmail
);

module.exports = router;
