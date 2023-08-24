const express = require("express");
const {getComidas, postComidas, updateComidas, deleteComidas,getComidasById} = require("../controllers/comidas.controllers")

const comidasRoutes = express.Router();

comidasRoutes.get("/",  getComidas);
comidasRoutes.post("/", postComidas);
comidasRoutes.put("/:id", updateComidas);
comidasRoutes.delete("/:id", deleteComidas)
comidasRoutes.get("/:id", getComidasById);

module.exports = comidasRoutes