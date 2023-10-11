const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const Comidas = require("../models/comidas.model");
const comidasData = require("../dbs/comidas.db");

const DB_URL = process.env.DB_URL;
mongoose
  .connect(DB_URL)
  .then(async()=> {
    Comidas.collection.drop();
    const comidasArray = comidasData.map((rest) => new Comidas(rest));
    await Comidas.insertMany(comidasArray);
      console.log("comidas  creadas correctamente")
  })
  .catch((error) => console.log("error insertando los Restaurantes", error))
  .finally(() => mongoose.disconnect());