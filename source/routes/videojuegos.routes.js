const express = require("express");
const {getRestaurante, postRestaurante, updateRestaurante, deleteRestaurante} = require("../controllers/restaurantes.controllers")

const vidRouter = express.Router();

restRouter.get("/", getRestaurante);
restRouter.post("/", postRestaurante);
restRouter.put("/:id", updateRestaurante);
restRouter.delete("/:id", deleteRestaurante)

module.exports = restRouter