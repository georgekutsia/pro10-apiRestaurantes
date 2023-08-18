const nodemailer = require("nodemailer");

const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD;
const EMAIL_MAIL = process.env.EMAIL_MAIL;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: EMAIL_MAIL,
    pass: EMAIL_PASSWORD,
  },
});
module.exports.sendRegistrationEmail = (user) => {
  transporter
    .sendMail({
      from: "iron.learning.welcomer@gmail.com",
      to: user.email,
      subject: `Bienvenido a Restaumanía ${user.name}!`,
      html: `
        <h3>Hola ${user.name}!</h3>
        ...
        <p>Nos alegra tenerte con nosotros y que quieras compartir tu opinión sobre tu aventura culinaria</p>  
        <p>Si tienes cualquier pregunta no dudes en contactarnos a este mismo mail</p>  
        <img src="https://res.cloudinary.com/dxnzcewsy/image/upload/v1692364085/restaurantes%20y%20usuarios/usuarios/Sujeto_oxbow9.png" width:300/>
        `,
    })
    .then(() => {
      console.log("email sent!");
    })
    .catch((err) => {
      console.error("error sending email, ", err);
    });
};
