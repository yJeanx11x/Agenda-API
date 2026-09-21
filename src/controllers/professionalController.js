const Profissional = require("../models/Professional");

async function criarProfissional(req, res, next) {
  try {
    const { nome, especialidade, telefone } = req.body;

    await Profissional.create({
      nome,
      especialidade,
      telefone,
    });

    return res
      .status(201)
      .json({ msg: "Proficional cadadstrado com sucesso! " });
  } catch (error) {
    next(error);
  }
}

async function profissional(req, res, next) {
  try {
    const profissional = await Profissional.findAll({
      attributes: ["id", "nome", "especialidade", "telefone"],
    });
    if (!profissional.length) {
      return res.status(401).json({ msg: "Nenhum Prodissional Cadastrado" });
    }
    return res.status(200).json(profissional);
  } catch (error) {
    next(error);
  }
}

async function profissionalId(req, res, next) {
  const { id } = req.params;
  try {
    const profissional = await Profissional.findOne({ where: { id },attributes:["id","nome","especialidade","telefone"] });
    if(!profissional){
        return res.status(401).json({msg:"Nenhum Profissional Encontrado"})
    }
    return res.status(200).json(profissional);
  } catch (error) {
    next(error);
  }
}
module.exports = { criarProfissional, profissional,profissionalId };
