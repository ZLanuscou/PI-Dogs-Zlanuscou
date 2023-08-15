require('dotenv').config();
const {API_KEY, URL} = process.env
const axios = require("axios")
const {Dog, Temperament} = require("../db.js")
const{validate} = require("uuid")
 async function GetById(req, res) {
    const {id} = req.params
    try {  
      console.log(validate(id))
      console.log("ID proporcionado:", id);
    if(!validate(id)){
      console.log("ID no válido.");
        const response = await axios (`${URL}?api_key=${API_KEY}`)  
        const {data} = response
        const finded = await data.find(dog => dog.id === parseInt(id))
      return res.status(200).json({
        Nombre: finded.name,
        Imagen: finded.image.url,
        Altura: finded.height.metric,
        Peso: finded.weight.metric,
        Temperamentos: finded.temperament,
        Años_de_vida: finded.life_span,
        ID: finded.id
      })
    }else{ 
      const dbDog = await Dog.findOne({where:{ID:id}})
      const tempArray = await dbDog.getTemperaments()
      console.log(tempArray)
      const temperamentos = tempArray.map(temp => temp.dataValues.Nombre).join(', ');
       return res.status(200).json({
            Nombre: dbDog.Nombre,
            Imagen: dbDog.Imagen,
            Altura: dbDog.Altura,
            Peso: dbDog.Peso,
            Temperamentos: temperamentos,
            Años_de_vida: dbDog.Años_de_vida
        })
    } 
    } catch (error) {
        console.error("Error al obtener el dogById", error)
        res.status(404).json({error:error.message})
    }
}
module.exports = GetById