require('dotenv').config();
const {Dog, Temperament} = require("../db.js")
const { Op } = require('sequelize');
async function PostDog(req, res) {
    const {Nombre, Altura, Años_de_vida, Peso, Temperamentos, Imagen} = req.body
    const temperamentsArray = Temperamentos.split(',').map((temp) => temp.trim());
    try {
  const newDog = await Dog.findOrCreate({where:{
    Nombre,
    Altura,
   Años_de_vida,
   Peso,
   Imagen
  }})
  if(!newDog[1])return res.status(409).send("Perror, perro ya existente")
const findTemp = await Temperament.findAll({where:{
    Nombre:{[Op.in]:temperamentsArray}
}})
console.log(findTemp)
if(findTemp.length < 1)return res.status(404).send("Al menos debe estar relacionado a un temperamento existente")
await newDog[0].addTemperaments(findTemp)
  res.status(201).json(newDog)
    } catch (error) {
        console.error("error al crear nuevo perro")
        res.status(500).json({error:error.message})
    }
}
module.exports = PostDog