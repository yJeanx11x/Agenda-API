const db = require("../config/database");
const { DataTypes } = require("sequelize");

const Professional = db.define("Professional", {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  especialidade: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  telefone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});


module.exports = Professional;
