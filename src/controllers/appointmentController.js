const User = require("../models/User");
const Profissional = require("../models/Professional");
const Agenda = require("../models/Appointment");

async function agendar(req, res, next) {
  const { ProfessionalId, data, horario } = req.body;
  try {
    const user = await User.findOne({ where: req.user.id });
    const profissional = await Profissional.findOne();
    
    if(ProfessionalId != profissional.id){
        return res.status(401).json({msg:"Profissional Indisponivel"})
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

module.exports = { agendar };
