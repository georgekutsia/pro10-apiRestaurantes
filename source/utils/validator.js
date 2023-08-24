const Usuario = require('../models/usuarios.model');

// regex email

const validateEmail = (email) => {
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; //email
  return regex.test(String(email).toLowerCase());
};
// regex pass

const validatePassword = (pass) => {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/; 
  return regex.test(String(pass));
};

const validateEmailDB = async (emailUser) => {
  try {
    const usuario = await Usuario.find({ email: emailUser });
    return usuario.length;
    
  } catch (error) {
    console.log(error);
  }
};

module.exports = { validateEmail, validatePassword, validateEmailDB };
