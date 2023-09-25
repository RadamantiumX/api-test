const net = require('node:net')// Modulo para conexiones TCP

// Funcion para encontrar el puerto que nosotros deseamos
function findAvailablePort (desiredPort) {
  return new Promise((resolve, reject) => {
    const server = net.createServer() // Creamos un servidor

    // El servidor escuchará en el puerto deseado
    server.listen(desiredPort, () => {
      const { port } = server.address()
      server.close(() => {
        resolve(port)
      })
    })
    // Escuchamos el evento de ERROR
    server.on('error', (err) => {
      // Si esta ocupado el puerto q estamos deseando
      if (err.code === 'ERR_SERVER_ALREADY_LISTEN') {
        // Resolvemos la promesa
        findAvailablePort(0).then(port => resolve(port)) // Resuelve con el puerto que nos habilite
      } else {
        reject(err) // Manejamos el ERROR
      }
    })
  })
}

module.exports = { findAvailablePort }
