const User = require("./user");
const Professional = require("../models/Professional");
const Appointment = require("../models/appointment");

User.hasMany(Appointment, {
  foreignKey: "UserId",
  as: "agendamentos",
});

Appointment.belongsTo(User, {
  foreignKey: "UserId",
  as: "usuario",
});

Professional.hasMany(Appointment, {
  foreignKey: "ProfessionalId",
  as: "agendamentos",
});

Appointment.belongsTo(Professional, {
  foreignKey: "ProfessionalId",
  as: "profissional",
});

async function iniciar() {
  try {
    await User.sync({ force: false });
    await Professional.sync({ force: false });
    await Appointment.sync({ force: false });

    console.log("Tabelas criadas com sucesso!");
  } catch (error) {
    console.error("Erro ao criar tabelas:", error);
  }
}


module.exports = iniciar;