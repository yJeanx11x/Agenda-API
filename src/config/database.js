require("dotenv").config();

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
  }
);

async function dataBase() {
  try {
    await sequelize.authenticate();
    console.log("A conexão foi estabelecida com sucesso.");
  } catch (error) {
    console.error("Não foi possível conectar ao banco de dados:", error);
  }
}

dataBase();

module.exports = sequelize;