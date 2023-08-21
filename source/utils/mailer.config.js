const nodemailer = require("nodemailer");

const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD;
const EMAIL_MAIL = process.env.EMAIL_MAIL;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: EMAIL_MAIL,
    pass: EMAIL_PASSWORD,
  },
  tls: { rejectUnauthorized: false },
});
module.exports.sendRegistrationEmail = (user) => {
  transporter
    .sendMail({
      from: "iron.learning.welcomer@gmail.com",
      to: user.email,
      subject: `Bienvenido a Restaumanía ${user.name}!`,
      html: `
        <h3>Espectaculaar ${user.name}!</h3>
        <img src="https://res.cloudinary.com/dxnzcewsy/image/upload/v1692574002/restaurantes%20y%20usuarios/usuarios/Sujeto1_qv6nml.png" width:300/>
        ...
        <p>Nos alegra tenerte con nosotros y que quieras compartir tu opinión sobre tu aventura culinaria</p>  
        <p>Si tienes cualquier pregunta no dudes en contactarnos a este mismo mail</p>  
        `,
    })
    .then(() => {
      console.log("email sent!");
    })
    .catch((err) => {
      console.error("error sending email, ", err);
    });
};
