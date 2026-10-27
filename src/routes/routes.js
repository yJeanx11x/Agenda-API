const express = require("express");

const appRoutes = express.Router();

const userControllers = require("../controllers/userController");
const jwt = require("../config/jwt");
const profissional = require("../controllers/professionalController");
const agendar = require("../controllers/appointmentController");
const adminUser = require("../middlewares/adminUser");


appRoutes.post("/register", userControllers.register);
appRoutes.post("/login", userControllers.login);
appRoutes.get("/user", jwt.verifyToken, userControllers.userPerfil);
appRoutes.delete("/user", jwt.verifyToken, userControllers.deletePerfil);
appRoutes.patch("/user", jwt.verifyToken, userControllers.atualizarPerfil);


appRoutes.post("/professionals",jwt.verifyToken,adminUser,profissional.criarProfissional);
appRoutes.get("/professionals", profissional.profissional);
appRoutes.get("/professionals", profissional.profissional);
appRoutes.get("/professionals/:id", profissional.profissionalId);
appRoutes.delete("/professionals/:id",jwt.verifyToken,adminUser,profissional.deletaProfissional);

appRoutes.post("/appointments", jwt.verifyToken, agendar.agendar);
appRoutes.get("/appointments", jwt.verifyToken, agendar.MeuAgendamento);
appRoutes.get("/appointments/:id",agendar.buscarAgendamento);
appRoutes.patch("/appointments/:id/cancel",jwt.verifyToken,adminUser,agendar.cancelarAgendamento);
appRoutes.patch("/appointments/:id/complete",jwt.verifyToken,adminUser,agendar.concluirAgendamento);
appRoutes.put("/meuAppointments/:id/cancel",jwt.verifyToken,agendar.cancelarMeuAgendamento);

module.exports = appRoutes;
