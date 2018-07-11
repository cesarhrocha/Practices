//const fs = require('fs');Require de una librería ya existente en node
//const fs = require('express');Paquetes no nativos de Node
//const fs = require('./fs');Archivos creados en el proyecto
const {crearArchivo} = require('./multiplicar/multiplicar.js');

let base = 3;

let argv = process.argv;
let parametro = argv[2];
base = parametro.split('=')[1];

crearArchivo(base)
    .then(archivo => console.log(`Archivo creado ${archivo}`))
    .catch(err=>console.log(err));