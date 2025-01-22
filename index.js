const express = require("express");
const dotenv = require("dotenv").config();
const path = require("path");
const cors = require("cors");

const { connect } = require(path.join(__dirname, "/source/utils/db"));
const restRouter = require(path.join(__dirname, "/source/routes/restaurantes.routes"));
const usuariosRoutes = require(path.join(__dirname, "/source/routes/usuarios.routes"));
const comRouter = require(path.join(__dirname, "/source/routes/comentarios.routes"));
const comidasRoutes = require(path.join(__dirname, "/source/routes/comidas.routes"));

const PORT = process.env.PORT || 3333;
const app = express();

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.use(express.json());

// 📌 Ruta de prueba para verificar que el servidor responde
app.get("/test", (req, res) => {
  res.json({ message: "🚀 Ruta de prueba funcionando en Vercel" });
});

// 📌 Middleware para depurar si /restaurantes se está registrando correctamente
app.use("/restaurantes", (req, res, next) => {
  console.log("✅ Ruta /restaurantes detectada en el servidor.");
  next();
}, restRouter);

// Registrar las demás rutas
app.use("/usuarios", usuariosRoutes);
app.use("/comentarios", comRouter);
app.use("/comidas", comidasRoutes);

// 📌 Ruta raíz para verificar que Express está corriendo
app.get("/", (req, res) => {
  res.send("¡API funcionando en Vercel!");
});

// 📌 Imprimir todas las rutas activas en Express
console.log("🛤  Rutas registradas en Express:");
app._router.stack.forEach((r) => {
  if (r.route && r.route.path) {
    console.log(`➡️ ${r.route.path}`);
  }
});

// 📌 Conectar a la base de datos antes de iniciar el servidor
connect().then(() => {
  app.get("/debug-routes", (req, res) => {
    const routes = [];
    app._router.stack.forEach((r) => {
      if (r.route && r.route.path) {
        routes.push(r.route.path);
      }
    });
    res.json({ rutasRegistradas: routes });
  });
  
  app.listen(PORT, () => console.log(`🚀 Servidor corriendo en el puerto ${PORT}`));
});
