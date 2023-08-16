const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const restauranteSchema = new Schema(
      {
        nombre:{type:String, required:true},
        foto:{type:String, required:false},
        descripcion:{type:String, required:true},
        ciudad:{type:String, required:true},
        puntos:{type:String, required:true},
      },{
        timestamps:true,
        toJSON:{
          transform:(req, res) =>{
            res.id =res._id;
            delete res._id;
            delete res.__v;
            return res
          }
        }
      }
)

const Restaurante = mongoose.model("restaurante", restauranteSchema)

module.exports = Restaurante;