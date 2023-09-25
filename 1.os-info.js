const os = require('node:os');//Modulo nativo
console.log('Informacion del sistema operativo');
console.log('-------------------------');

console.log('Nombre del sistema operativo', os.platform());
console.log('Version del sistema operativo', os.release());
console.log('Arquitectura', os.arch());
console.log('CPUs',os.cpus());//Vamos a poder escalar procesos en NODE
console.log('Memoria Libre', os.freemem()/1024/1024)//Memoria (dividimos para obtener los Megas)
console.log('Memoria total',os.totalmem()/1024/1024)//Memoria total (dividimos para obtener los Megas)
console.log('Uptime',os.uptime()/60/60);//Cuanto dias lleva la PC encendida
