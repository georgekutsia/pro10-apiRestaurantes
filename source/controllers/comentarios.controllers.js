const Comentarios = require("../models/comentarios.model");
const Usuario = require("../models/usuarios.model");
const Restaurant = require("../models/restaurantes.model");

const getComentarios = async(req,res)=>{
  try {
    const allComents = await Comentarios.find();
    return res.status(200).json(allComents);
  } catch (error) {
    return res.status(500).json(error)
  }
}

const getComentarioById = async (req, res) => {
  try {
    const { id } = req.params;
    const comentario = await Comentarios.findById(id);
    if (!comentario) {
      return res.status(404).json({ message: "Comentario no encontrado" });
    }
    return res.status(200).json(comentario);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postComentario = async (req, res) => {
  try {
    const newComentario = req.body;
    const createdComentario = new Comentarios(newComentario);
    const created = await createdComentario.save();

    const userId = req.body.userId;
    const restaurantId = req.params.id;

    const usuario = await Usuario.findById(userId);
    if (!usuario) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }
    usuario.comments.push(created.id);
    await usuario.save();

    
    const restaurante = await Restaurant.findById(restaurantId);
    if (!restaurante) {
      return res.status(404).json({ message: "Restaurante no encontrado" });
    }
    restaurante.comments.push(created.id);
    await restaurante.save();

    return res.status(200).json(created);
  } catch (error) {
    return res.status(500).json(error);
  }
};


const updateComentario = async (req, res) => {
  try {
    const {id} = req.params;
    const updateComentario = new Comentarios(req.body);
    updateComentario.id = id;
    const patchComentario = await Comentarios.findByIdAndUpdate(id, updateComentario, {new: true})
    if (!patchComentario){
      return res.status(404).json({message: "Comentario inexistente"});
    }
    return res.status(200).json(patchComentario);
  } catch (error) {
    return res.status(500).json(error);
  }
}

const deleteComentario = async (req, res) =>{
  try {
    const {id} = req.params;
    const deleteComentario = await Comentarios.findByIdAndDelete(id)
    if(!deleteComentario){
      console.log(id)
      return res.status(418).json({message: "¿Que haces?"})
    }
    return res.status(200).json(deleteComentario)
  } catch (error) {
    return res.status(500).json(error)
  }
}


module.exports = { getComentarios, getComentarioById, postComentario, updateComentario, deleteComentario, };