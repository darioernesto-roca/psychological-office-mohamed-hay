// home.controller.js
require('dotenv').config();
const nodemailer = require("nodemailer");
const mg = require("nodemailer-mailgun-transport");
const { validationResult } = require("express-validator");


exports.index = (req, res) => {
  const errors = req.flash("errors")[0] || {};
  res.render("home", {
    title: "Inicio | Mohamed Hay | Consultorio psicológico",
    errors,
    success_msg: req.query.success,
  });
};

// Sets Nodemailer transporter with Mailgun credentials
const auth = {
  auth: {
    api_key: process.env.MAILGUN_API_KEY,
    domain: process.env.MAILGUN_DOMAIN,
  },
};

const transporter = nodemailer.createTransport(mg(auth));

exports.sendEmail = async (req, res) => {
  try {
    // Get validation errors
    const errors = validationResult(req);

    // Verify if there are errors in validation
    if (!errors.isEmpty()) {
      return res.render("home", {
        title: "Inicio | Mohamed Hay | Consultorio psicológico",
        errors: errors.mapped(),
      })
    }

    // If there's no errors continue with the process
    const { name, phone, email, message } = req.body;

    // Sets data for emails
    const mailOptions = {
      from: "Nombre <informacion@labanalisis.com>",
      to: "darioernesto.roca@gmail.com",
      subject: "Mensaje de Consultorio psicológico",
      html: `
          <p>Nombre: ${name}</p>
          <p>Teléfono: ${phone}</p>
          <p>Correo electrónico: ${email}</p>
          <p>Mensaje: ${message}</p>
        `,
    };

    // Sends the email
    const info = await transporter.sendMail(mailOptions);
    console.log("Mensaje enviado: %s", info.messageId);

    res.render("home", {
      title: "Inicio | Mohamed Hay | Consultorio psicológico",
      errors: errors,
      success_msg: "*Su mensaje ha sido enviado, nos pondremos en contacto con usted para confirmar su cita",
    });
  } catch (error) {
    console.log(error);
    res.render("home", { error_msg: "Error al enviar el mensaje" });
  }
};
