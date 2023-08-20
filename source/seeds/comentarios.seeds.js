const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const Comentarios = require("../models/comentarios.model");
const comentariosData = require("../dbs/comentarios.db");

const DB_URL = process.env.DB_URL;
console.log(comentariosData);
mongoose
  .connect(DB_URL)
  .then(async () => {
    Comentarios.collection.drop();
    const restaurantsArray = comentariosData.map(
      (rest) => new Comentarios(rest)
    );
    await Comentarios.insertMany(restaurantsArray);
    console.log("comentarios creados correctamente");
  })
  .catch((error) => console.log("error insertando los Comentarios", error))
  .finally(() => mongoose.disconnect());
