const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('Temperament', {
      Nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ID:{
   type: DataTypes.UUID,
   defaultValue: DataTypes.UUIDV4,
   primaryKey: true,
      }
    });
  };