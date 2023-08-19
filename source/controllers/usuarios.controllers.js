  const Usuario = require("../models/usuarios.model");
  const bcrypt = require ("bcrypt");
  const {validateEmail, validatePassword, validateEmailDB} = require ("../utils/validator");
  const {generateSign} = require("../utils/jwt");
  const { sendRegistrationEmail } = require("../utils/mailer.config");


  const register = async (req,res)=>{
    try {
      const newUsuario = new Usuario(req.body)
      if (!validateEmail(newUsuario.email)){
          return res.status(400).json({message: "email inválido"})
      }
      if (!validatePassword(newUsuario.password)) {
      return res.status(400).json({message: "password inválido"})
    }
    if (await validateEmailDB(newUsuario.email)) {
      return res.status(400).json({ message: "email introducido ya existe" });
    }
    newUsuario.password = bcrypt.hashSync(newUsuario.password, 15);
    const createdUsuario = await newUsuario.save();
      sendRegistrationEmail(newUsuario);

    return res.status(201).json(createdUsuario);
  } catch (error){
      return res.status(530).json(error)
  }
  };

  const login = async (req,res) => {
      try{
          const usuarioInfo = await Usuario.findOne({email:req.body.email})
          console.log("usuarioinfo",usuarioInfo)
          if (!usuarioInfo) {
              return res.status(404).json({message: "Contraseña o Mail incorrectos"})
          }
          if (!bcrypt.compareSync(req.body.password, usuarioInfo.password)){
              return res.status(404).json({message: "Contraseña o Mail incorrectos"})
          }
          const token = generateSign(usuarioInfo._id, usuarioInfo.email);
          return res.status(200).json({usuario:usuarioInfo, token:token})
      } catch(error){
          return res.status(500).json(error)
      }
  }

  const updateUsuarios = async (req, res) => {
    try {
      const {id} = req.params;
      const updateUsuario = new Usuario(req.body);
      updateUsuario.id = id;
      const updatedInfo = await Usuario.findByIdAndUpdate(id, updateUsuario, {new: true})
      if (!updatedInfo){
        return res.status(404).json({message: "No encontrado :("});
      }
      return res.status(200).json(updatedInfo);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

    const deleteUsuarios = async (req, res) =>{
      try {
        const {id} = req.params;
        const deleteUsuarios = await Usuario.findByIdAndDelete(id)
        if(!deleteUsuarios){
          return res.status(418).json({message: "¿Que haces?"})
        }
        return res.status(200).json(deleteUsuarios)
      } catch (error) {
        return res.status(500).json(error)
      }
    }

  const getUsuarios = async (req, res) => {
    try {
      const allUsuarios = await Usuario.find().populate("favorite");
      return res.status(200).json(allUsuarios);
    } catch (error) {
      return res.status(500).json(error);
    }
  };
const detailUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    const usuario = await Usuario.findById(id).populate("favorite");
    if (!usuario) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }
    return res.status(200).json(usuario);
  } catch (error) {
    return res.status(500).json(error);
  }
};
  // const getUsuariosMayoresDeEdad = async (req, res) => {
  //   try {
  //     const usuariosMayoresDeEdad = await Usuario.find({ edad: { $gte: 18 } })
  //       .select("nombre edad") 
  //     return res.status(200).json(usuariosMayoresDeEdad);
  //   } catch (error) {
  //     return res.status(500).json(error);
  //   }
  // };

  module.exports = { register, login, getUsuarios, deleteUsuarios, updateUsuarios, detailUsuario };