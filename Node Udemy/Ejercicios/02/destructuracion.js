let michifice = {
    nombre: 'Michi',
    apellido: 'Fernandez',
    poder: 'telequinesis, hablar con mantarrayas y comer chorizo',
    getNombre: function(){
        return `${this.nombre} ${this.apellido} -poder: ${this.poder}`;
    }
};
/*
let nombre = michifice.nombre;
let apellido = michifice.apellido;
let poder = michifice.poder;*/

let {nombre: primerNombre, apellido, poder} = michifice;

console.log(primerNombre, apellido, poder);