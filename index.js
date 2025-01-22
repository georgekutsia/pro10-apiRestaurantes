const express = require("express");
const dotenv = require("dotenv").config();
const { connect } = require("./source/utils/db");
const restRouter = require("./source/routes/restaurantes.routes");
const usuariosRoutes = require("./source/routes/usuarios.routes");
const comRouter = require("./source/routes/comentarios.routes");
const comidasRoutes = require("./source/routes/comidas.routes");
const cors = require("cors");

const PORT = process.env.PORT;
const app = express();

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.use(express.json());

app.use("/restaurantes", restRouter);
app.use("/usuarios", usuariosRoutes);
app.use("/comentarios", comRouter);
app.use("/comidas", comidasRoutes);

connect();
app.listen(PORT, () => console.log(`Conectando al puerto ${PORT}`));
