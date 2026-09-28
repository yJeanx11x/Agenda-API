const db=require('../config/database')
const { DataTypes } = require("sequelize");

const Appointment = db.define("Appointment", {
  data: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },

  horario: {
    type: DataTypes.TIME,
    allowNull: false,
  },

  status: {
    type: DataTypes.ENUM(
      "AGENDADO",
      "CONCLUIDO",
      "CANCELADO"
    ),
    allowNull: false,
    defaultValue: "AGENDADO",
  },

  UserId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  ProfessionalId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

async function iniciar() {
  try {
     await Appointment.sync({ force: false });
      console.log("Tabelas Appointment Criada com Sucesso!");

  } catch (error) {
    console.error("tabela Appointment deu erro",error)
  }
}

iniciar()
module.exports = Appointment;