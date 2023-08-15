require('dotenv').config();
const {API_KEY, URL} = process.env
const axios = require("axios")
const {Dog, Temperament} = require("../db.js")
const { Op } = require("sequelize");
 async function GetDogName(req, res) {
    const name = req.query.name;
    try {
      const dbDogs = await Dog.findAll({
        where: {
          Nombre: { [Op.iLike]: `%${name}%` }, // El ilike busca de manera insensible 
        },
      });
      for(const dog of dbDogs){
        const temperamentos = await dog.getTemperaments();
        const temperamentosArray = temperamentos.map(temp => temp.dataValues.Nombre)
        dog.dataValues.Temperamentos = temperamentosArray.join(', ');
        console.log( "Get dogs temp array ",  dog.Temperamentos)
    }
      const response = await axios(`${URL}?api_key=${API_KEY}`);
      const apiDogs = response.data.filter((dog) =>
        dog.name.toLowerCase().includes(name.toLowerCase())
      );
      const allDogs = [...dbDogs, ...apiDogs.map(d=>({
        Peso: d.weight.metric,
        Altura: d.height.metric,
        Nombre: d.name,
        Imagen: d.image.url,
        Años_de_vida: d.life_span,
        Temperamentos: d.temperament,
        ID: d.id  
      }))];
  
      if (allDogs.length > 0) {
        res.status(200).json(allDogs);
      } else {
        res.status(404).json({ error: 'No se encontraron razas de perros con ese nombre' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al obtener las razas de perros por nombre' });
    }
}
module.exports = GetDogName