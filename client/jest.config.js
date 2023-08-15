module.exports = {
    transform: {
        '^.+\\.jsx?$': 'babel-jest', // Agrega esta línea para transformar los archivos JS/JSX con Babel
      },
    globals: {
      'NODE_OPTIONS': '--experimental-vm-modules' // Habilitar ESM
    },
    // Otras configuraciones de Jest
  };