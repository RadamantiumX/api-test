// Sistema de modulos
const fs = require('node:fs/promises')
const path = require('node:path')

// Importamos PICOCOLORS
const pc = require('picocolors')

// Por defecto que sea el punto
const folder = process.argv[2] ?? '.'

async function ls (folder) {
  let files
  try {
    files = await fs.readdir(folder)
    // Tenemos que leer los archivos del directorio antes de continuar con el codigo
  } catch {
    console.error(pc.red(`💥No se pudo leer el directorio: ${folder}`))
    process.exit(1)// Salimos del error de forma controlada, notamos el error
  }

  // Mapeamos los archivos
  // Aca aplicacion la ejecucion en paralelo, recuperando la informacion de todos los archivos
  const filesPromises = files.map(async file => {
    const filePath = path.join(folder, file)// Listamos la informacion
    let stats

    // Obtenemos el STAT de cada archivo
    try {
      stats = await fs.stat(filePath)// Informacion del archivo
    } catch {
      console.error(`No se puede leer el archivo ${filePath}`)
      process.exit(1)// Salimos del error de forma controlada, notamos el error
    }

    const isDirectory = stats.isDirectory()
    const fileType = isDirectory ? 'd' : 'f'// Si es un directorio ponemos una "d", sino, ponemos un "-"
    const fileSize = stats.size// Tamaño del archivo
    const fileModified = stats.mtime.toLocaleString()// Cuando se modifico el archivo
    return `${pc.bgMagenta(fileType)} ${pc.cyan(file.padEnd(20))} ${pc.green(fileSize.toString().padStart(10))} ${pc.yellow(fileModified)}`
  })
  /**
 * El padEnd va a ocupar los espacios que indiquemos en el argumento.
 * El padStart nos deja una separacion al principio
 */

  const filesInfo = await Promise.all(filesPromises)

  filesInfo.forEach(fileInfo => console.log(fileInfo))
}
ls(folder)

/**
 * -Al utilizar map, lo hace todo a la vez, no lo hace secuencial.
 * -Utilizamos un try catch en cierta parte del codigo para poder identificar mejor los errores.
 *
 *  */
