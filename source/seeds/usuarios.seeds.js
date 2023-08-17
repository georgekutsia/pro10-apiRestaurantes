const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const Usuarios = require("../models/usuarios.model");
const usuariosData = require("../dbs/usuarios.db");
const bcrypt = require("bcrypt");

const DB_URL = process.env.DB_URL;

mongoose
  .connect(DB_URL)
  .then(async () => {
    Usuarios.collection.drop();
    const usuariosArray = usuariosData.map((user) => {
      const encryptedPassword = bcrypt.hashSync(user.password, 10);
      const newUser = {
        ...user,
        password: encryptedPassword,
      };
      return new Usuarios(newUser);
    });
    await Usuarios.insertMany(usuariosArray);
    console.log("Usuarios creados correctamente");
  })
  .catch((error) => console.log("Error insertando los Usuarios", error))
  .finally(() => mongoose.disconnect());
