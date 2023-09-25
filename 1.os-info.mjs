//import { platform, release, arch, cpus, freemem, totalmem, uptime } from 'node:os';//Modulo nativo
import os from 'node:os';
//Son dos formas de importar


console.log('Informacion del sistema operativo');
console.log('-------------------------');

console.log('Nombre del sistema operativo', platform());
console.log('Version del sistema operativo', release());
console.log('Arquitectura', arch());
console.log('CPUs',cpus());//Vamos a poder escalar procesos en NODE
console.log('Memoria Libre', freemem()/1024/1024)//Memoria (dividimos para obtener los Megas)
console.log('Memoria total',totalmem()/1024/1024)//Memoria total (dividimos para obtener los Megas)
console.log('Uptime',uptime()/60/60);//Cuanto dias lleva la PC encendida
