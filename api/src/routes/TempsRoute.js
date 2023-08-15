const GetTemps = require("../controllers/GetTemperaments")
const { Router } = require('express');
const TempsRoute = Router();
TempsRoute.get("/temperaments", GetTemps)

module.exports = TempsRoute;