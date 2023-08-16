const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const Country = require("../api/models/country.model")

const DB_url = process.env.DB_url;

mongoose
  .connect(DB_url)
  .then(async()=> {
    Country.collection.drop()
    const countriesMap = countriesArray.map((count) => new Country(count));
    await Country.insertMany(countriesMap)
      console.log("países creados correctamente")
  })



  .catch((error) => console.log("error insertando los Videojuegos", error))
  .finally(() => mongoose.disconnect());
