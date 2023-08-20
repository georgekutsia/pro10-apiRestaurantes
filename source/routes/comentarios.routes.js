const express = require("express");
const { getComentarios, getComentarioById, postComentario, updateComentario, deleteComentario } = require("../controllers/comentarios.controllers");

const comRouter = express.Router();

comRouter.get("/", getComentarios);
comRouter.get("/:id", getComentarioById);
comRouter.put("/:id", updateComentario);
comRouter.delete("/:id", deleteComentario);
comRouter.post("/:id/userComment", postComentario);

module.exports = comRouter