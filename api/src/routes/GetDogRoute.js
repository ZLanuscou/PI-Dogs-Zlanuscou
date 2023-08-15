const { Router } = require('express');
const getAllDogs = require("../controllers/GetDogs")
const GetAllRoute = Router();

GetAllRoute.get("/", getAllDogs);

module.exports = GetAllRoute;