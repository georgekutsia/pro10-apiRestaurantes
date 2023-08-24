const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const restauranteSchema = new Schema(
      {
        name:{type:String, required:true, unique:true, maxLength:[30, "El nombre no puede ecceder los 30 caracteres"],},
        img:{type:String, required:false},
        description:{type:String, required:true, minLength:[3, "La descripción debe tener al menos 3 caracteres"], maxLength:[500, "La descripción no puede ecceder los 500 caracteres"] },
        city:{type:String, required:true, trim:true},
        score:[{type:Number, required:false, min:1, max:10}],
        address:{type:String, required:false, trim:true},
        hours:[{type:String, required:false, trim:true}],
        phone:{type:String, required:false, minLength:[6, "El número de teléfono debe tener al menos 6 caracteres"], maxLength:[30, "El número de teléfono no puede ecceder los 30 caracteres"]},
        comments:[{ type: Schema.Types.ObjectId, ref: "comentarios" }],
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