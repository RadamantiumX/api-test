//En modulos (mjs) podemos utilzar el async -  await sin que este en una funcion asincrona
//En EC-Modules sopotan async - await en el cuerpo del archivo. Se llama TOP LEVEL AWAIT. En COMMON JS no lo podemos hacer.
//Esto es asincronia

const {readFile} = require('node:fs/promises');//El punto y coma es requerido si expresamos el codigo de esta forma

//Funcion autoinvocada - IIFE (Inmediatly Invoked Function Expression)
/*(async()=>{
console.log('leyendo el primer archivo...');

const text = await readFile('./archivo.txt','utf-8');
      
          console.log(`primer texto: ${text}`); 
       

console.log('Hacer otra cosa mientras lee el primer texto....');

console.log('leyendo el segundo archivo...');

const secondText = await readFile('./archivo2.txt','utf-8');
    console.log(`segundo texto: ${secondText}`);

})()*/

async function init(){
    console.log('leyendo el primer archivo...');

const text = await readFile('./archivo.txt','utf-8');
      
          console.log(`primer texto: ${text}`); 
       

console.log('Hacer otra cosa mientras lee el primer texto....');

console.log('leyendo el segundo archivo...');

const secondText = await readFile('./archivo2.txt','utf-8');
    console.log(`segundo texto: ${secondText}`);

}

init();

/**
 * Vemos el proceso de ejecucion asincrono secuencial
 * 
 * EJECUCION ASYNC
 * Lee el archivo.txt 1 (ocupado)-->
 * No hace nada (libre)...
 * No hace nada (libre)...
 * Resuelve PROMISE archivo.txt 1 (ocupado)<--></-->>
 * No hace nada (libre)...
 * No hace nada (libre)...
 * Lee el archivo2.txt 2 (ocupado)-->
 * No hace nada (libre)...
 * No hace nada (libre)...
 * Resuelve PROMISE archivo2.txt 2 (ocupado)<--></-->>
 * 
 * 
 */




