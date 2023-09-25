//Este es un de los modulos mas importantes de NODEJS
const fs = require('node:fs');//Siempre utilizar el prefijo de los modulos nativos

const stats = fs.statSync('./archivo.txt');//Nos devuelve informacion del archivo

console.log(
    stats.isFile(),//Si es un archivo BOOL
    stats.isDirectory(),//Si es un directorio BOOL
    stats.isSymbolicLink(),//Si es un enlace simbolico BOOL
    stats.size//Tamaño en BYTES INT

);