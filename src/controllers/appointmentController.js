const User = require("../models/user");
const Professional = require("../models/Professional");
const Agenda = require("../models/appointment");

async function agendar(req, res, next) {
  const { ProfessionalId, data, horario } = req.body;
  try {
    const user = await User.findOne({ where: req.user.id });
    const profissional = await Professional.findOne({ where: ProfessionalId });
    const agenda = await Agenda.findOne({ where: req.user.id });

 
    await Agenda.create({
      data,
      horario,
      UserId: user.id,
      ProfessionalId,
    });

    return res.status(201).json({
      msg: "Agendamento com sucesso!",
      Horario: horario,
      Data: data,
      Profissional: profissional.nome,
      Tipo: profissional.especialidade,
    });
  } catch (error) {
    next(error);
  }
}

async function MeuAgendamento(req, res, next) {
  try {
    

    const userAgenda = await Agenda.findAll({where:{UserId:req.user.id, status:"AGENDADO" },attributes: { exclude: ['createdAt','updatedAt'] }});
    if (!userAgenda.length  ) {
      return res.status(401).json({ msg: "Você não tem Nunhum agendamento" });
    }
    return res.status(200).json({Meu_Agendamento: userAgenda });
  } catch (error) {
    next(error);
  }
}

async function buscarAgendamento(req, res, next) {
  const { id } = req.params;
  try {
    const agendamento = await Agenda.findOne({
      where: { id },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    return res.status(200).json(agendamento);
  } catch (error) {
    next(error);
  }
}

async function cancelarMeuAgendamento(req, res, next) {
  const cancelarAgendado = await Agenda.findAll({ where: req.user.id });
  try {
    return res.status(200).json(cancelarAgendado);
  } catch (error) {
    next(error);
  }
}

// cancelar agendamento
async function cancelarAgendamento(req, res, next) {
  const { id } = req.params;
  try {
    const agendaCancelar = await Agenda.findOne({ where: { id } });

    if (agendaCancelar.status === "CANCELADO") {
      return res
        .status(401)
        .json({ msg: "O agendamento do cliente já foi cancelado." });
    }

    if (!agendaCancelar) {
      return res.status(401).json({ msg: "Agendamento Não encontrado!" });
    }

    if (agendaCancelar.status === "CONCLUIDO") {
      return res
        .status(401)
        .json({
          msg: "Não é possível cancelar o serviço, pois ele já foi concluído.",
        });
    }
    await agendaCancelar.update({
      status: "CANCELADO",
    });

    await Agenda.save();

    return res.status(200).json({ msg: "Agendamento cancelado com sucesso." });
  } catch (error) {
    next(error);
  }
}

// CONCLUIDO
async function concluirAgendamento(req, res, next) {
  const { id } = req.params;
  try {
    const agendaCancelar = await Agenda.findOne({ where: { id } });

    if (!agendaCancelar) {
      return res.status(401).json({ msg: "Agendamento Não encontrado!" });
    }

    if (agendaCancelar.status === "CONCLUIDO") {
      return res
        .status(401)
        .json({ msg: "O agendamento do cliente já foi CONCLUIDO." });
    }

    if (agendaCancelar.status === "CANCELADO") {
      return res
        .status(401)
        .json({
          msg: "Não é possível concluir o serviço: o agendamento foi cancelado.",
        });
    }

    await agendaCancelar.update({
      status: "CONCLUIDO",
    });

    await Agenda.save();

    return res.status(200).json({ msg: "Agendamento CONCLUIDO com sucesso." });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  agendar,
  MeuAgendamento,
  buscarAgendamento,
  cancelarAgendamento,
  concluirAgendamento,
};
