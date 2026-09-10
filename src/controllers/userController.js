const db = require("../config/database");
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
});

async function criaTabela() {
  try {
    await User.sync({ force: false });
    console.log("Tabela Criada com Sucesso!");
  } catch (error) {
    console.log("tabela erro", error);
  }
}

criaTabela();
