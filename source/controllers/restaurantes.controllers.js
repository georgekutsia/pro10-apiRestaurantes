const Restaurante = require("../models/restaurantes.model");


const getRestaurante = async(req,res)=>{
  try {
    const allRestaurantes = await Restaurante.find();
    return res.status(200).json(allRestaurantes)
  } catch (error) {
    return res.status(500).json(error)
  }
}

const postRestaurante = async (req, res) => {
  try {
    const newRestaurante = req.body;
    const createdRestaurante = new Restaurante(newRestaurante);
    const created = await createdRestaurante.save()
    return res.status(200).json(created);
  } catch (error) {
    return res.status(500).json(error);
  }
}

const updateRestaurante = async (req, res) => {
  try {
    const {id} = req.params;
    const updateRestaurante = new Restaurante(req.body);
    updateRestaurante.id = id;
    const updatedInfo = await Restaurante.findByIdAndUpdate(id, updateRestaurante, {new: true})
    if (!updatedInfo){
      return res.status(404).json({message: "No encontrado :("});
    }
    return res.status(200).json(updatedInfo);
  } catch (error) {
    return res.status(500).json(error);
  }
}

const deleteRestaurante = async (req, res) =>{
  try {
    const {id} = req.params;
    const deleteRestaurante = await Restaurante.findByIdAndDelete(id)
    if(!deleteRestaurante){
      return res.status(418).json({message: "¿Que haces?"})
    }
    return res.status(200).json(deleteRestaurante)
  } catch (error) {
    return res.status(500).json(error)
  }
}

module.exports = { getRestaurante, postRestaurante, updateRestaurante, deleteRestaurante};