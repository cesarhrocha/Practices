/*function sumar(a, b){
    return a + b;
}*/
/*
let sumar = (a, b) => {
    return a + b;
}*/

let sumar = (a, b) =>  a + b;

//Las tres funciones hacen lo mismo, en el caso de las
//funciones que son de una sola línea, no hace falta abrir
//las llaves ni escribir el return.

/*function saludar(nombre){
    return `Hola ${nombre}`;
}*/

//let saludar = (nombre) =>{
//    return `Hola ${nombre}`;
//}



//console.log(sumar(10,20));
//Las funciones de flecha se declaran inicializando una variable
//que es igual a los argumentos de la función, si no hay argumentos,
//se iguala al paréntesis vacío y se hace la flecha que indica el
//retorno de la función.

//let saludar = nombre => `Hola ${nombre}`;
//Cuando una función de flecha recibe solo un argumento, se puede
//omitir el paréntesis y escribir el argumento.

//console.log(saludar('Michifice'));

let michifice = {
    nombre: 'Michi',
    apellido: 'Fernandez',
    poder: 'telequinesis, hablar con mantarrayas y comer chorizo',
    getNombre: () =>{
        return `${this.nombre} ${this.apellido} -poder: ${this.poder}`;
    }
};

console.log(michifice.getNombre());
