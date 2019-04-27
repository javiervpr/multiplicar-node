//requireds 3 tipos
const fs = require('fs'); //Las que viene por defecto instaladas en node 
//const fs = require('express'); librerias externas
//const fs = require('./pathArchivo'); las que nosotros creamos
const colors =  require('colors');

let data = '';

let listarTabla = (base,limite)=>{
    console.log('==============================='.green);
    console.log(`=======Tabla del ${base}=============`.green);
    console.log('==============================='.green);
    for(let i = 1 ;i<=limite;i++){
        console.log(`${base} * ${i} = ${base*i}`);
    }
}
let crearArchivo = ( base,limite ) =>{
    return new Promise((resolve,reject)=>{
        if(!Number(base)){
            reject(`El valor introducido ${base} no es un numero`);
            return;
        } 
        for(let i = 1;i<=limite;i++){
            data += `${base} * ${i} = ${base*i}\n`;
        }
        
        fs.writeFile(`tablas/tabla-${base}`,data, (err)=>{
            if(err) {reject(err);}
            else {resolve(`tabla-${base}.txt`);}
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}