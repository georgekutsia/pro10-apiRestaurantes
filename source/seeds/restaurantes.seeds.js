const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const Restaurante = require("../models/restaurantes.model");
const restaurantesData = require("../dbs/restaurantes.db");

const DB_URL = process.env.DB_URL;

mongoose
  .connect(DB_URL)
  .then(async()=> {
    Restaurante.collection.drop();
    const restaurantsArray = restaurantesData.map((rest) => new Restaurante(rest));
    await Restaurante.insertMany(restaurantsArray);
      console.log("restaurantes  creados correctamente")
  })
  .catch((error) => console.log("error insertando los Restaurantes", error))
  .finally(() => mongoose.disconnect());