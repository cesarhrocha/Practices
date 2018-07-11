
/*let getNombre = async() =>{
    return 'Cesar';
};

getNombre().then((nombre) =>{
    console.log(nombre);
})
.catch((e=>{
    console.log('Error de Async', e);
}));
*/
let getNombre = () =>{
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve('Cesar');
        }, 3000);
    });
};

let saludo = async() =>{

    let nombre = await getNombre();

    return `Hola ${nombre}`;
};


getNombre().then((nombre)=>{
    console.log(nombre);
})
.catch((e)=>{
    console.log('Error: ' + e);
})

saludo().then((msj)=>{
    console.log(msj);
})
.catch((e)=>{
    console.log(e);
});