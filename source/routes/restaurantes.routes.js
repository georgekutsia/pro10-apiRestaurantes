const express = require("express");
const {getRestaurante, postRestaurante, updateRestaurante, deleteRestaurante,getRestauranteById} = require("../controllers/restaurantes.controllers")

const restRouter = express.Router();

restRouter.get("/", getRestaurante);
restRouter.post("/", postRestaurante);
restRouter.put("/:id", updateRestaurante);
restRouter.delete("/:id", deleteRestaurante)
restRouter.get("/:id", getRestauranteById);

module.exports = restRouter