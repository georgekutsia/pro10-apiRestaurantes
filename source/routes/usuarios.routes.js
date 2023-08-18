const express = require("express");
const {register, login, deleteUsuarios, getUsuarios, updateUsuarios} = require("../controllers/usuarios.controllers")
const usuariosRoutes = express.Router();

usuariosRoutes.post("/register", register);
usuariosRoutes.post("/login", login);
usuariosRoutes.get("/", getUsuarios);
// usuariosRoutes.get("/mayores", getUsuariosMayoresDeEdad);
usuariosRoutes.delete("/:id", deleteUsuarios);
usuariosRoutes.put("/:id", updateUsuarios);
module.exports = usuariosRoutes;