require('dotenv').config();
const {API_KEY, URL} = process.env
const axios = require("axios")
const {Dog, Temperament} = require("../db.js")
async function GetTemps(req, res) {
    
    try {
        const validate = await Temperament.findAll()
        if(validate.length < 1){
        const response = await axios(`${URL}?api_key=${API_KEY}`);
        const filter = response.data.map(d=> d.temperament).filter(d => d !== null && d !== undefined)
        
        const temperaments = [...new Set(filter.map(temp => temp.split(",").map((t) => t.trim())).flat())]; //flat para hacerlo un arreglo plano
        console.log(temperaments)
        for (const temp of temperaments) {
            await Temperament.findOrCreate({where:{ Nombre: temp }});
          }
        const updateDb = await Temperament.findAll()
        res.status(200).json(updateDb)
}else{
    res.status(200).json(validate)
}
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}
module.exports = GetTemps