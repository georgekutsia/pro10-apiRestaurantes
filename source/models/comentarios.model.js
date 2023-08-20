const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const comentariosSchema = new Schema(
  {
    score: { type: Number, required: true, min: 1, max: 10 },
    comments: [ { 
        type: String,
        required: false,
        minLength: [3, "El comentario debe tener al menos 3 caractereres"],
        maxLength: [300, "El comentario no puede ecceder los 300 caracteres"],
      },
    ],
  },
  {
    timestamps: true,
    toJSON: {
      transform: (doc, ret) => {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
        return ret;
      },
    },
  }
);

const Comentarios = mongoose.model("comentarios", comentariosSchema);

module.exports = Comentarios;
