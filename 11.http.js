// Nos permite crear un servidor HTTP y poder recibir peticiones
const http = require('node:http')// Protocolo HTTP

// Leemos la variable de entorno
const desiredPort = process.env.PORT ?? 3000

// Importamos el modelo de puertos
const { findAvailablePort } = require('./12.free-ports.js')

// Gestionamos las REQUESTS como las RESPONSES
const server = http.createServer((req, res) => {
  console.log('request received')
  res.end('Hola mundo')// Terminamos la comunicacion.
})

findAvailablePort(desiredPort).then(port => {
  server.listen(port, () => {
    console.log(`Sever listening on port http://localhost:${port}`)
  })
})

// Donde escuchara el servidor, primero el puerto (3000), utilizando el 0 buscara el primero q este vacio
// En produccion hay que dejarlo en un puerto estandar, esto es solo para desarrollo
// server.listen(0, () => {
// Se ejecutara cuando el servidor empiece a escuchar
// Vemos el puerto q nos habilitó
// console.log(`Server listening on port http://localhost:${server.address().port}`)
// })
