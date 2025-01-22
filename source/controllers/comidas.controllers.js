const Comidas = require("../models/comidas.model");


const getComidas = async(req, res)=>{
  try {
    const allComidass = await Comidas.find();
    return res.status(200).json(allComidass)
  } catch (error) {
    return res.status(500).json(error)  
  }
}
const getComidasById = async (req, res) => {
  try {
    const { id } = req.params;
    const comidas = await Comidas.findById(id);
    if (!comidas) {
      return res.status(404).json({ message: "Comida no encontrada" });
    }
    return res.status(200).json(comidas);
  } catch (error) {
    return res.status(500).json(error);
  }
};
const postComidas = async (req, res) => {
  try {
    const newComidas = req.body;
    const createdComidas = new Comidas(newComidas);
    const created = await createdComidas.save()
    return res.status(200).json(created);
  } catch (error) {
    return res.status(500).json(error);
  }
}

const updateComidas = async (req, res) => {
  try {
    const {id} = req.params;
    const updateComidas = new Comidas(req.body);
    updateComidas.id = id;
    const updatedInfo = await Comidas.findByIdAndUpdate(id, updateComidas, {new: true})
    if (!updatedInfo){
      return res.status(404).json({message: "No encontrado :("});
    }
    return res.status(200).json(updatedInfo);
  } catch (error) {
    return res.status(500).json(error);
  }
}

const deleteComidas = async (req, res) =>{
  try {
    const {id} = req.params;
    const deleteComidas = await Comidas.findByIdAndDelete(id)
    if(!deleteComidas){
      return res.status(418).json({message: "¿Que haces?"})
    }
    return res.status(200).json(deleteComidas)
  } catch (error) {
    return res.status(500).json(error)
  }
}

module.exports = { getComidas, postComidas, updateComidas, deleteComidas,getComidasById};