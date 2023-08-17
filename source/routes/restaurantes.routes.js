const express = require("express");
const {getRestaurante, postRestaurante, updateRestaurante, deleteRestaurante} = require("../controllers/restaurantes.controllers")

const restRouter = express.Router();

restRouter.get("/", getRestaurante);
restRouter.post("/", postRestaurante);
restRouter.put("/:id", updateRestaurante);
restRouter.delete("/:id", deleteRestaurante)

module.exports = restRouter