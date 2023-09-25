//readFileSync es sincrono
const fs = require('node:fs');

console.log('leyendo el primer archivo...');

const text = fs.readFileSync('./archivo.txt','utf-8');
      
          console.log(`primer texto: ${text}`); 
       
console.log('Hacer otra cosa mientras lee el primer texto....');

console.log('leyendo el segundo archivo...');
const secondText = fs.readFileSync('./archivo2.txt','utf-8')
    console.log(`segundo texto: ${secondText}`);

/**
 * Vemos el proceso de ejecucion SINCRONO
 * 
 * EJECUCION SYNC
 * Lee el archivo.txt 1 (ocupado)-->
 * Resuelve archivo.txt 1 (ocupado)<--></-->>
 * Lee el archivo2.txt 2 (ocupado)-->
 * Resuelve archivo2.txt 2 (ocupado)<--></-->>
 * 
 * 
 */