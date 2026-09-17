const express = require("express");

const appRoutes = express.Router();

const userControllers = require("../controllers/userController");
const jwt = require("../config/jwt");

appRoutes.post("/register", userControllers.register);
appRoutes.post("/login", userControllers.login);
appRoutes.get("/user", jwt.verifyToken,userControllers.userPerfil);



module.exports = appRoutes;
