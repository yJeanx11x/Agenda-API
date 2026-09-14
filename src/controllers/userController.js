const { User } = require("../models/user");
const bcrypt = require("bcrypt");
async function register(req, res, next) {
  const { nome, email, password } = req.body;
  const senhaHas = await bcrypt.hash(password, 12);
  
  try {
    User.create({
      nome:nome,
      email:email,
      password: senhaHas,
    });
    return res.status(201).json({ msg: "Sua conta foi criada com sucesso! " });
  } catch (error) {
    next(error);
  }
}

module.exports = { register };
