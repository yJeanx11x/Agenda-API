const profissional = require('../models/Professional')

async function criarProfissional(req, res, next) {
  try {
    const { nome, especialidade, telefone } = req.body;

    await profissional.create({
      nome,
      especialidade,
      telefone,
    });

    return res.status(201).json({ msg: "Proficional cadadstrado com sucesso! " });
  } catch (error) {
    next(error);
  }
}

module.exports = { criarProfissional };
