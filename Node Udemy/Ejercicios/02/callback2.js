let empleados = [{
    id: 1, 
    nombre: 'César'
},{
    id:2,
    nombre: 'Michi'
},{
    id:3,
    nombre: 'El Omer'
}];

let salarios = [{
    id: 1,
    salario: 1000
},{
    id:2,
    salario: 3000
}];

let getEmpleado = (id, callback) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id);

    if(!empleadoDB){
        callback(`No existe un empleado con el ID ${id}`);
    }
    else{
        callback(null, empleadoDB);
    }
}

let getSalario = (empleado, callback) => {
    let salarioDB = salarios.find(salario => salario.id === empleado.id);

    if(!salarioDB){
        callback(`No existe salario para el usuario nombre ${empleado.nombre}`);
    }
    else{
        callback(null, {
            nombre: empleado.nombre,
            salario: salarioDB.salario,
            id: empleado.id
        });
    }
}

getEmpleado(1, (err, empleado) =>{
    if(err){
        return console.log(err);
    };

    getSalario(empleado,(err, resp)=>{
        if(err){
            return console.log(err);
        }
        console.log(`El salario del usuario ${resp.nombre} es de ${resp.salario}$`);
        
    });
});