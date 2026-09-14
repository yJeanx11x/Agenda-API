require("dotenv").config();
const express = require("express");
const route=require('../routes/routes')
const erroGlobal=require('../middlewares/erroglob')

const app = express();
app.use(express.json());
app.use(erroGlobal)
app.use(route)

app.listen(process.env.PORT, () => {
  console.log("servidor rodando com sucesso!");
});
