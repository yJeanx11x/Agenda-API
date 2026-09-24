const Professional = require("./Professional");
const Appointment = require("./Appointment");
const User = require("../models/user");

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

    console.log("Banco conectado!");

    await User.sync({ force: true });
    await Professional.sync({ force: true });
    await Appointment.sync({ force: true });

    console.log("Tabelas criadas com sucesso!");

  } catch (error) {
    console.log("Erro ao conectar ao banco:", error);
  }
}

iniciar();

