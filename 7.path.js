const path = require('node:path');

//Como es la separacion de las rutas en nuestro OS: '/' o '\'
//console.log(path.sep);

//Unir rutas con path.join
//Nos crea la ruta para nuestro OS
const filePath = path.join('content','subfolder','test.txt');
console.log(filePath);

//Nos da el nombre del archivo con la extension
const base = path.basename('/temp/files-secret/password.txt');
console.log(base);

//Nos da el nombre del archivo sin la extension
const baseNoExtension = path.basename('/temp/files-secret/password.txt','.txt');
console.log(baseNoExtension);

//Nos muestra la extension del archivo
const extension = path.extname('image.jpg');
console.log(extension);