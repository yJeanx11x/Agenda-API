const db = require("../config/database");
const proficional = require("./Professional");
const agendamento = require("./Appointment");

const { DataTypes } = require("sequelize");

const User = db.define("User", {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: db.Sequelize.ENUM("ADMIN", "USER"),
    allowNull: false,
    defaultValue: "USER",
  },
  token: {
    type: db.Sequelize.TEXT,
    allowNull: true,
  },
});

async function criaTabela() {
  try {
    await User.sync({ force: false });
    await proficional.sync({ force: false });
    await agendamento.sync({ force: false });
    console.log("Tabelas Criada com Sucesso!");
  } catch (error) {
    console.log("tabela erro", error);
  }
}

criaTabela();

module.exports = { User };
