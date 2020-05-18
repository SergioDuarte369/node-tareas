const argv = require("./config/yargs").argv;

const colors = require("colors");

const porHacer = require("./por-hacer/por-hacer");

console.log(argv);

let comando = argv._[0];

switch (comando) {
    case "crear":
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case "listar":

        let listado = porHacer.getListado();

        for (let tarea of listado) {
            console.log("===================POR HACER=========");
            console.log(tarea.descripcion);
            console.log("Estado: ", tarea.completado);
            console.log("===================POR HACER=========".green);
        }

        console.log("Mostrar las tareas por hacer");
        break;


    case "actualizar":

        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);


        console.log("Actualiza una tarea por hacer");
        break;

    case "borrar":
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;

    default:
        console.log("Comando no conocido");

}