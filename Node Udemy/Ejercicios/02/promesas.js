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

let getEmpleado = (id) => {

    return new Promise((resolve, reject)=>{

        let empleadoDB = empleados.find(empleado => empleado.id === id);

        if(!empleadoDB){
            reject(`No existe empleado con el ID ${id}`);
        }
        else{
            resolve(empleadoDB);
        }
    });
}
/*let getSalario = (empleado, callback) => {
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
}*/

let getSalario = (empleado)=>{
    
    return new Promise((resolve, reject)=>{
        let salarioDB = salarios.find(salario => salario.id === empleado.id);

        if(!salarioDB){
            reject(`No existe salario para el empleado ${empleado.nombre}`);
        }
        else{
            resolve({
                nombre: empleado.nombre,
                salario: salarioDB.salario,
                id: empleado.id
            });
        }
    })
}

getEmpleado(1).then((empleado) => {
        return getSalario(empleado);
    })
    .then( (resp)=>{
        console.log(`El salario de ${resp.nombre} es de ${resp.salario}$`);
    })
    .catch((err)=>{
        console.log(err);
    })