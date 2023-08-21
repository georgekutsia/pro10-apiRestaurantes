const express = require("express");
const { getComentarios, getComentarioById, postComentario, updateComentario, deleteComentario } = require("../controllers/comentarios.controllers");
const {getRestauranteById} = require("../controllers/restaurantes.controllers")

const comRouter = express.Router();

comRouter.get("/", getComentarios);
comRouter.get("/:id", getComentarioById);
comRouter.put("/:id", updateComentario);
comRouter.delete("/:id", deleteComentario);
comRouter.post("/:id/userComment", postComentario);
comRouter.get("/:id/userComment", getRestauranteById);

module.exports = comRouter