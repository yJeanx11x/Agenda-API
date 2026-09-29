require("dotenv").config();
const jwt = require("jsonwebtoken");
const  User  = require("../models/user");

async function verifyToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ msg: "Token não fornecido" });
  }

  try {
    const secret = process.env.SECRET;
    const decoded = jwt.verify(token, secret);
    const user = await User.findOne(decoded.id);

    if (!user) {
      return res.status(401).json({ msg: "Usuário não encontrado" });
    }

    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ msg: "Token inválido" });
  }
}

module.exports = { verifyToken };
