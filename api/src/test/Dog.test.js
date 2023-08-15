
const { Dog } = require('../db'); // Importa el modelo Dog y la instancia de la base de datos

describe('Modelo Dog', () => {
  it('debe tener las propiedades y tipos de datos correctos', () => {
    // Obtener la descripción de las columnas del modelo
    const columns = Dog.rawAttributes;

    // Definir las propiedades y sus tipos esperados
    const expectedProperties = {
      Nombre: 'STRING',
      ID: 'UUID',
      Imagen: 'STRING',
      Altura: 'DECIMAL',
      Peso: 'DECIMAL',
      Años_de_vida: 'STRING',
      createdAt: 'DATE',
      updatedAt: 'DATE',
    };

    // Verificar las propiedades y tipos de datos
    Object.keys(expectedProperties).forEach(property => {
      expect(columns[property]).toBeDefined();
      expect(columns[property].type.key).toBe(expectedProperties[property]);
    });
  });
});