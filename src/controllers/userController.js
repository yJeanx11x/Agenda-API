const { User } = require("../models/user");

async function register(req, res) {
  const { nome, email, password } = req.body;
  try {
    User.create({
      nome,
      email,
      password,
    });
    return res.status(201).json({ msg: "Sua conta foi criada com sucesso! " });
  } catch (error) {
    console.log("Deu Erro aqui ");
  }
}

module.exports = { register };
