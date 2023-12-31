const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Dog', {
    Nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ID:{
 type: DataTypes.UUID,
 defaultValue: DataTypes.UUIDV4,
 primaryKey: true,
 
    },
    Imagen:{
    type: DataTypes.TEXT,
    allowNull:true
    },
    Altura:{
    type: DataTypes.STRING,
    allowNull:false,
    },
    Peso:{
   type: DataTypes.STRING,
   allowNull:false,
    },
    Años_de_vida:{
   type:DataTypes.STRING,
   allowNull:false,
    }
  });
};
