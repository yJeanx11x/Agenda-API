const { User } = require("../models/user");
const bcrypt = require("bcrypt");
const z = require("../schemas/validacaoUser");

async function register(req, res, next) {
  const validacao = z.safeParse(req.body);
  const senhaHas = await bcrypt.hash(validacao.data.password, 12);

  try {
    User.create({
      nome: validacao.data.nome,
      email: validacao.data.email,
      password: senhaHas,
    });
    return res.status(201).json({ msg: "Sua conta foi criada com sucesso! " });
  } catch (error) {
    next(error);
  }
}

module.exports = { register };
