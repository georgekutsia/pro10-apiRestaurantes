const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const restauranteSchema = new Schema(
      {
        nombre:{type:String, required:true, unique:true, maxLength:[30, "El nombre no puede ecceder los 30 caracteres"],},
        foto:{type:String, required:false},
        descripcion:{type:String, required:true, minLength:[10, "La descripción debe tener al menos 10 caracteres"], maxLength:[500, "La descripción no puede ecceder los 500 caracteres"] },
        ciudad:{type:String, required:true, trim:true},
        puntos:{type:Number, required:true, min:1, max:10},
      },{
        timestamps:true,
        toJSON:{
      transform: (doc, ret) => {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
        return ret;
      },
        }
      }
)

const Restaurante = mongoose.model("restaurante", restauranteSchema)

module.exports = Restaurante;