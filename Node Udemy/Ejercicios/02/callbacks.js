//setTimeout(() => console.log('Hola mundo'), 3000);

let getUsuarioById = (id, callback) => {
    let usuario = {
        nombre: 'Michi',
        id: id
    }

    if(id === 20){
        callback(`El usuario con id ${id}, no existe en la BD`);
    }else{
        callback(usuario);
    }

    
}

getUsuarioById(20, (usuario) => {
    console.log('Usuario de base de datos:', usuario);
});