const { DataTypes } = require("sequelize");
const db=require('../config/database')

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

module.exports = Appointment;