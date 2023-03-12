// contact.controller.js
require('dotenv').config();
const nodemailer = require("nodemailer");
const mg = require("nodemailer-mailgun-transport");


exports.get = (req, res) => {
  res.render('contact', {
    title: 'Contacto | Mohamed Hay | Consultorio psicológico',
    success_msg: req.query.success,
  });
};

// Configura el transporter de Nodemailer con las credenciales de Mailgun
const auth = {
  auth: {
    api_key: process.env.MAILGUN_API_KEY,
    domain: process.env.MAILGUN_DOMAIN,
  },
};

const transporter = nodemailer.createTransport(mg(auth));

exports.sendEmail = async (req, res) => {
  try {
    const { name, phone, email, message } = req.body;

    // Configura los datos del correo electrónico
    const mailOptions = {
      from: "Nombre <informacion@labanalisis.com>", // dirección de correo electrónico del remitente
      to: "darioernesto.roca@gmail.com", // dirección de correo electrónico del destinatario
      subject: "Mensaje de Consultorio psicológico", // Asunto del correo electrónico
      html: `
          <p>Nombre: ${name}</p>
          <p>Teléfono: ${phone}</p>
          <p>Correo electrónico: ${email}</p>
          <p>Mensaje: ${message}</p>
        `,
    };

    // Envía el correo electrónico
    const info = await transporter.sendMail(mailOptions);

    console.log("Mensaje enviado: %s", info.messageId);
    res.render("contact", {
      title: "Contacto | Mohamed Hay | Consultorio psicológico",
      success_msg: "*Su mensaje ha sido enviado, nos pondremos en contacto con usted para confirmar su cita",
    });
  } catch (error) {
    console.log(error);
    res.render("contact", { error_msg: "Error al enviar el mensaje" });
  }
};
