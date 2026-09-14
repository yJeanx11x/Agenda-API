const express = require("express");

const appRoutes = express.Router();

const userControllers=require('../controllers/userController')

appRoutes.post('/register', userControllers.register)

module.exports = appRoutes;
