const fs = require("fs");

let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile("db/data.json", data, (err) => {
        if (err) throw new Error("No se pudo grabar", err);
    });
}

const cargarDB = () => {

    try {
        listadoPorHacer = require("../db/data.json");

    } catch (error) {

        listadoPorHacer = []; ///Esto lo manejmos de esta manera para evitar errores al encontrar un json vacío

    }





}




const crear = (descripcion) => {

    cargarDB();

    let porHaceR = {
        descripcion,
        completado: false,

    };

    listadoPorHacer.push(porHaceR);

    guardarDB();

    return porHaceR;
}

const getListado = () => {
    cargarDB();
    return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {

    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    ///si retorna -1 significa que la tarea no existe
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const borrar = (descripcion) => {

    cargarDB();

    let nuevoListado = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion);

    if (listadoPorHacer.length === nuevoListado.length) {
        return false;
    } else {
        listadoPorHacer = nuevoListado;
        guardarDB();
        return true;
    }

}


module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}