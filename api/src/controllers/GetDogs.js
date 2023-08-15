require('dotenv').config();
const {API_KEY, URL} = process.env
const axios = require("axios")
const {Dog} = require("../db.js")
async function getAllDogs(req, res){

try {
    if(!req.query.name){
const response = await axios (`${URL}?api_key=${API_KEY}`)
const {data} = response
const dogsApi = data.map(d => ({
    Peso: d.weight.metric,
    Altura: d.height.metric,
    Nombre: d.name,
    Imagen: d.image.url,
    Años_de_vida: d.life_span,
    Temperamentos: d.temperament,
    ID:d.id    
}))
const dogsDb = await Dog.findAll()
for(const dog of dogsDb){
    const temperamentos = await dog.getTemperaments();
    const temperamentosArray = temperamentos.map(temp => temp.dataValues.Nombre)
    dog.dataValues.Temperamentos = temperamentosArray.join(', ');
    console.log( "Get dogs temp array ",  dog.Temperamentos)
}
console.log("De get dogs", dogsDb)
const allDogs= [...dogsDb, ...dogsApi]
    res.status(200).json(allDogs)}
} catch (error) {
    console.error("Error al obtener los datos:", error);
    res.status(500).json({error:error.message})
}
}
module.exports = getAllDogs