const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const restauranteSchema = new Schema(
      {
        name:{type:String, required:true, unique:true, maxLength:[30, "El nombre no puede ecceder los 30 caracteres"],},
        img:{type:String, required:false},
        description:{type:String, required:true, minLength:[10, "La descripción debe tener al menos 10 caracteres"], maxLength:[500, "La descripción no puede ecceder los 500 caracteres"] },
        city:{type:String, required:true, trim:true},
        score:{type:Number, required:true, min:1, max:10},
        coments:[{type:String, required:false, minLength:[3, "El comentario debe tener al menos 3 caractereres"], maxLength:[200, "El comentario no puede ecceder los 200 caracteres"]}]
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