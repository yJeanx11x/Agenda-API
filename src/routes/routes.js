const express = require("express");

const appRoutes = express.Router();

const userControllers = require("../controllers/userController");
const jwt = require("../config/jwt");
const proficional = require("../controllers/professionalController");
const agendar = require("../controllers/appointmentController");

appRoutes.post("/register", userControllers.register);
appRoutes.post("/login", userControllers.login);
appRoutes.get("/user", jwt.verifyToken, userControllers.userPerfil);
appRoutes.delete("/user", jwt.verifyToken, userControllers.deletePerfil);

appRoutes.post("/professionals", proficional.criarProfissional);
appRoutes.get("/professionals", proficional.profissional);
appRoutes.get("/professionals", proficional.profissional);
appRoutes.get("/professionals/:id", proficional.profissionalId);
appRoutes.delete("/professionals/:id", proficional.deletaProfissional);

appRoutes.post("/appointments", jwt.verifyToken, agendar.agendar);

module.exports = appRoutes;
