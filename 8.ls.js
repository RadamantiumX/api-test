/**
 * Hacemos un listado de los archivos y carpetas de la ruta donde esta
 */
const fs = require('node:fs');

/**
 * En los CALLBACKS el ERROR o err, siempre va como primer parametro
 * Tiene como finalidad manejar el error
 */

//Leemos el directorio
fs.readdir('.',(err,files)=>{
   if(err){
    console.error('Error del directorio',err);
    return;//Evitamos seguir ejecutando el codigo
   }

   files.forEach(file=>{
    console.log(file)
   })
})