//Lee los archivos primero, y despues continua
//Estamos paralelizando la asincronia
import { readFile } from "node:fs/promises";


Promise.all([
    readFile('./archivo.txt','utf-8'),
    readFile('./archivo2.txt','utf-8')
]).then(([text,secondText])=>{
    console.log('primer texto:', text);
    console.log('segundo texto:', secondText);
})
     
;


/**
 * Proceso de ejecucion en PARALELO
 * 
 * Ejecución PARALLEL
 * Lee el archivo.txt 1 -->Lee el archivo2.txt 2-->(ocupado)PARALELO
 * No hace nada (libre)...
 * No hace nada (libre)...
 * No hace nada (libre)...
 * Ejecuta PROMISE archivo1.text 1 y archivo2.txt (ocupado) AMBOS TERMINARON <--></-->
 */



