const express = require("express");

const appRoutes = express.Router();

const userControllers = require("../controllers/userController");
const jwt = require("../config/jwt");

appRoutes.post("/register", userControllers.register);
appRoutes.post("/login", userControllers.login);
appRoutes.get("/user", jwt.verifyToken,userControllers.userPerfil);
appRoutes.delete("/user", jwt.verifyToken,userControllers.deletePerfil);



module.exports = appRoutes;
