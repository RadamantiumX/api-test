//Leemos un fichero
const { error } = require('node:console');
const fs = require('node:fs/promises');

console.log('leyendo el primer archivo...');

fs.readFile('./archivo.txt','utf-8')
 .then(text=>{
    console.log('Primer text',text)
 })
 .catch(err=>{
    console.log('Error:', err)
 })
;
      
          
       





console.log('Hacer otra cosa mientras lee el primer texto....');

console.log('leyendo el segundo archivo...');
fs.readFile('./archivo2.txt','utf-8')
 .then(text=>{
    console.log('Segundo text:',text);
 })
 .catch(err=>{
    console.log('Error: ',err);
 })

