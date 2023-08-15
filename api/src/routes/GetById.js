const GetById = require("../controllers/GetDogsById")
const { Router } = require('express');
const GetByIdRoute = Router();

GetByIdRoute.get("/getid/:id", GetById)
module.exports = GetByIdRoute;
