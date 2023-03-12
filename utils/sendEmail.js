// sendEmail.js

const sgMail = require('@sendgrid/mail');

// Configura la API Key de SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Function to send an e-mail
const sendEmail = async (to, subject, html) => {
  const msg = {
    to: to,
    from: process.env.EMAIL_FROM,
    subject: subject,
    html: html,
  };
  try {
    await sgMail.send(msg);
    console.log(`Email enviado a ${to}`);
  } catch (error) {
    console.error(error);
    throw new Error('Error al enviar el correo electrónico');
  }
};


module.exports = sendEmail;