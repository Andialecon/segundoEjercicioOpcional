estudiantes=[];
// var nombre = document.getElementById("nombre").value;
// var matematicas = document.getElementById("matematicas").value;
// var ingles = document.getElementById("ingles").value;
// var programacion = document.getElementById("programacion").value;

const crear = () => {
   nombre=prompt("Escriba el nombre del estudiante");
   matematicas=parseFloat(prompt("Escriba la calificación obtenida en matematicas"));
   ingles=parseFloat(prompt("Escriba la calificación obtenida en ingles"));
   programacion=parseFloat(prompt("Escriba la calificación obtenida en programación"));
    let nuevoEstudiante = {
        nombre:nombre,
        matematicas:matematicas,
        ingles:ingles,
        programacion:programacion,
        promedio:(matematicas+ingles+programacion)/3
    };

    let duplicado = estudiantes.find(elemento => elemento.nombre==nombre);
    if(duplicado){
        alert("Ese estudiante ya ha sido ingresado");
    }else{
        estudiantes.push(nuevoEstudiante);
        alert("El estudiante ha sido registrado");
    }
};

const ver=()=>{
    // console.log(estudiantes);
    var texto="";
    estudiantes.forEach(elemento => {
        texto+= "<strong>"+elemento.nombre + "</strong></br>" + "MATEMATICAS: " + elemento.matematicas + "</br> INGLES: " + elemento.ingles + "</br> PROGRAMACIÓN: "+ elemento.programacion + "</br> <strong>Promedio:</strong> "+ elemento.promedio + "</br></br>"; 
    });
    document.getElementById("respuesta").innerHTML=texto;
};

const actualizar=()=>{
    nombreEst=prompt("Escriba el nombre del estudiante al cual desea modificar su información");
    let id = estudiantes.find(elemento => elemento.nombre==nombreEst);
    if(!id){
        alert("No se encontró ningun estudiante con ese nombre");
    }else{
        opcion=prompt("Elija que dato desea modificar: 1.nombre  2.Nota de matematicas 3.Nota de ingles 4.Nota de programación");
        switch (opcion) {
    
            case "1": nuevoNombre=prompt("Escriba el nuevo nombre");
            let modificar = estudiantes.find(elemento => elemento.nombre==nombreEst);
            modificar.nombre=nuevoNombre;
            alert("El nombre del estudiante ha sido cambiado con exito");
            break;

            case "2": nuevoPuntaje=parseFloat(prompt("Escriba el nuevo puntaje para matematicas"));
            let modificar2 = estudiantes.find(elemento => elemento.nombre==nombreEst);
            modificar2.matematicas=nuevoPuntaje;
            modificar2.promedio=(modificar2.matematicas+modificar2.ingles+modificar2.programacion)/3;
            alert("El puntaje de matematicas ha sido actualizado");
            break;

            case "3": nuevoPuntaje=parseFloat(prompt("Escriba el nuevo puntaje para ingles"));
            let modificar3 = estudiantes.find(elemento => elemento.nombre==nombreEst);
            modificar3.ingles=nuevoPuntaje;
            modificar3.promedio=(modificar3.matematicas+modificar3.ingles+modificar3.programacion)/3;
            alert("El puntaje de ingles ha sido actualizado");
            break;

            case "4": nuevoPuntaje=parseFloat(prompt("Escriba el nuevo puntaje para programacion"));
            let modificar4 = estudiantes.find(elemento => elemento.nombre==nombreEst);
            modificar4.programacion=nuevoPuntaje;
            modificar4.promedio=(modificar4.matematicas+modificar4.ingles+modificar4.programacion)/3;
            alert("El puntaje de programación ha sido actualizado");
            break;

            default: alert("Ha elegido una opción invalida, intente nuevamente");
        }
    }
}

const eliminar=()=>{
    EstBorrar=prompt("Escriba el nombre del estudiante que desea borrar");
    let ListaActualizada = estudiantes.filter(estudiante=>estudiante.nombre != EstBorrar);
    estudiantes=ListaActualizada;
    console.log("el estudiante ha sido borrado");
};


