const  user   = require("../models/user");
const Professional = require("../models/Professional");
const Agenda = require("../models/appointment");

async function agendar(req, res, next) {
  const { ProfessionalId, data, horario } = req.body;
  try {
    const user = await User.findOne({ where: req.user.id });
    const profissional = await Profissional.findOne();

    if (ProfessionalId != profissional.id) {
      return res.status(401).json({ msg: "Profissional Indisponivel" });
    }
    await Agenda.create({
      data,
      horario,
      UserId: user.id,
      ProfessionalId,
    });
    return res.status(201).json({ msg: "Agendamento com sucesso!" });
  } catch (error) {
    next(error);
  }
}

async function MeuAgendamento(req, res, next) {
  try {
    const agendamento = await Agenda.findOne({
      where: req.user.id,
      attributes: ["data", "horario", "status"],
    });
    // const professional = await Profissional.findOne({ where: agendamento.UserId });

    if (!agendamento) {
      return res.status(401).json({ msg: "Você não tem Nunhum agendamento" });
    }
    return res.status(200).json({ agendamentos: agendamento });
  } catch (error) {
    next(error);
  }
}

module.exports = { agendar, MeuAgendamento };
