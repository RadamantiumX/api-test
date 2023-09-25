//Leemos un fichero
const fs = require('node:fs');
//const {promisify} = require('node:util');//Creamos la version de promesas

//const readFilePromise =  promisify(fs.readFile);//Con esto ya podemos utilizar las promesas, pero no de forma nativa. Solo en casos q no tengan promesas nativas hay que utilizarlo.

console.log('leyendo el primer archivo...');

fs.readFile('./archivo.txt','utf-8',(err, text)=>{ //Callback a ejecutar
      
          console.log(`primer texto: ${text}`); 
       
});//readFileSync es asincrono




console.log('Hacer otra cosa mientras lee el primer texto....');

console.log('leyendo el segundo archivo...');
fs.readFile('./archivo2.txt','utf-8',(err,text)=>{
    console.log(`segundo texto: ${text}`);
});

/**
 * Vemos el proceso de ejecucion con CALLBACK
 * 
 * 
 * Ejecucion con CALLBACK
 * Lee un archivo.txt 1 (ocupado)--->
 * No hace nada (libre)...
 * Lee otro archivo2.txt 2 (ocupado)--->
 * No hace nada (libre)...
 * No hace nada (libre)...
 * No hace nada (libre)...Terminando de leer...
 * Ejecuta el CALLBACK del archivo2.txt 2 (Ocupado)<--></-->
 * Ejecuta el CALLBACK del archivo.txt 1 (Ocupado)<--></-->
 */