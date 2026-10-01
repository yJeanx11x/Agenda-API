const User = require("../models/user");
const Professional = require("../models/Professional");
const Agenda = require("../models/appointment");

async function agendar(req, res, next) {
  const { ProfessionalId, data, horario } = req.body;
  try {
    const user = await User.findOne({ where: req.user.id });
    const profissional = await Professional.findOne({ where: ProfessionalId });
    const agenda = await Agenda.findOne({ where: req.user.id });

    if (!profissional) {
      return res.status(401).json({ msg: "Profissional Indisponivel" });
    }

    if (agenda.horario == horario) {
      return res.status(401).json({ msg: "Horario Indisponivel" });
    }

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
    const userAgenda = await Agenda.findAll({
      UserId: req.user.id,
      attributes: ["data", "horario", "status"],
    });
    if (!userAgenda) {
      return res.status(401).json({ msg: "Você não tem Nunhum agendamento" });
    }
    return res
      .status(200)
      .json({ msg: "Você Tem agendado", Meu_Agendamento: userAgenda });
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

async function cancelarAgendamento(req, res, next) {
  const { id } = req.params;
  try {
    const agendaCancelar = await Agenda.findOne({ where: { id } });

    if(agendaCancelar.status === "CANCELADO"){

      return res.status(401).json({msg:"O agendamento do cliente já foi cancelado."})
    }
    if(!agendaCancelar){
      return res.status(401).json({msg:"Agendamento Não encontrado!"})
    }
   await agendaCancelar.update({
    status:'CANCELADO'
   })

await Agenda.salve()

   return res.status(200).json({msg:"Agendamento cancelado com sucesso."})
  } catch (error) {
    next(error);
  }
}


module.exports = { agendar, MeuAgendamento, buscarAgendamento,cancelarAgendamento };
