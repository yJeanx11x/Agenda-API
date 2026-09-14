const express = require("express");

const appRoutes = express.Router();

const userControllers = require("../controllers/userController");

appRoutes.post("/register", userControllers.register);
appRoutes.post("/login", userControllers.login);

module.exports = appRoutes;
