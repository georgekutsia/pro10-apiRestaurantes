const Usuarios = require("../models/usuarios.model");

const { verifySign } = require("../utils/jwt");

const isAuthenticated = async (req, res, next) => {
  try {
    const authorization = req.headers.authorization;
    console.log(req.headers);
    if (!authorization) {
      return res.status(401).json({ message: "No autorizado" });
    }
    const token = authorization.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "Token no   existente" });
    }
    const tokenVerified = await verifySign(token);
    if (!tokenVerified) {
      return res.status(401).json(tokenVerified,"muchas cosas van mal");
    }
    const userLogged = await Usuarios.findById(tokenVerified.id);
    req.user = userLogged;
    next()
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};
const isAdmin = async (req, res, next) => {
  try {
    const authorization = req.headers.authorization;
    console.log(req.headers.authorization);
    if (!authorization) {
      console.log(authorization);
      return res.status(401).json({ message: `no autorizado ${authorization}` });
    }
    const token = authorization.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "Token no existente" });
    }
    const tokenVerified = await verifySign(token);
    if (!tokenVerified) {
      return res.status(401).json(tokenVerified,"muchas cosas van mal");
    }
    const userLogged = await Usuarios.findById(tokenVerified.id);
    req.user = userLogged;
    next()
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};


module.exports = { isAuthenticated, isAdmin };
