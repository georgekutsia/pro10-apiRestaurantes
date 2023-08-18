const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const usuarioSchema = new Schema(
  {
    name: { type: String, required: true, trim: true, minLength: [3, "El nombre debe tener al menos 3 caracteres"], maxLength: [30, "El nombre no puede exceder 30 caracteres"]},
    email: { type: String, required: true, trim: true, unique:true},
    password: { type: String, required: true, trim: true, maxLength: [80, "El password no puede exceder 80 caracteres"]},
    age: { type: Number, required: true, min:[12, "menores de 12 años no pueden registrarse en esta página web"] },
    img: { type: String, required: false },
    favorite: [{ type: Schema.Types.ObjectId, ref: "restaurante" }],
  },
  {
    timestamps: true,
    toJSON: {
transform: (doc, ret) => {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
        delete ret.password;
        return ret;
      },
    },
  }
);

const Usuario = mongoose.model("usuario", usuarioSchema);

module.exports = Usuario;
