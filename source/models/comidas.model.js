const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const comidasSchema = new Schema(
      {
        name:{type:String, required:true, unique:true, maxLength:[30, "El nombre no puede ecceder los 30 caracteres"],},
        img:{type:String, required:false},
        description:{type:String, required:true, minLength:[3, "La descripción debe tener al menos 3 caracteres"], maxLength:[500, "La descripción no puede ecceder los 500 caracteres"] },
        price:[{type:String, required:false, trim:true, min:[0.50, "Comidas con menos precio no deben destacarse"], max:[400, "Plato excesivamente caro para nuestro perfil de restaurantes"]}],
        dietaryPreferences: { type: String, required: false, enum: ['Vegan', 'Vegetarian', 'Carnivore', 'Halal', 'Kosher','Paleo', 'Sugar-free', 'Low-sodium', 'Pescatarian'], trim: true},
        allergen: { gluten: Boolean, dairy: Boolean, eggs: Boolean, peanuts: Boolean, treeNuts: Boolean, soy: Boolean, fish: Boolean, shellfish: Boolean, wheat: Boolean, mustard: Boolean, sesame: Boolean, celery: Boolean, sulphurDioxide: Boolean, molluscs: Boolean},
        spicy:[{type:Number, required:false, trim:true, min:[0, "No puede ser menos que no picante"], max:[5, "5 es el nivel de picante máximo en nuestra tabla"]}],
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

const Comidas = mongoose.model("comidas", comidasSchema)

module.exports = Comidas;