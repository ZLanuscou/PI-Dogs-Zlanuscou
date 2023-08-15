const GetDogName = require("../controllers/GetDogsName")
const { Router } = require('express');
const GetByNameRout = Router();
GetByNameRout.get("/filter", GetDogName)

module.exports = GetByNameRout;