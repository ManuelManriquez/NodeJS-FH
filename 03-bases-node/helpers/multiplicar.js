const colors = require('colors');

const crearArchivoTabla = async(base = 1, listar = false) => {
    const fs = require('fs')
    let salida = '';
    let nombreArchivo = '';


    salida += '======================\n'.underline.blue
    salida += `     TABLA DEL ${base}\n`.blue.bold
    salida += '======================\n'.underline.blue    


for (let index = 0; index <= 10; index++) {
    salida += `${base} x ${index} = ${base*index} \n`
}

listar ? console.log(salida) : false;

try {
    fs.writeFileSync(`tabla-${base}.txt`, salida)
} catch (error) {
    console.log(error.underline.bold.red);
}


nombreArchivo = `tabla-${base}.txt`.underline.green.bold;

return  nombreArchivo
}

module.exports = {
    crearArchivo: crearArchivoTabla
}