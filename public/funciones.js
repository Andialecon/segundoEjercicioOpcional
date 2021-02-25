estudiantes=[];

const crear = (estudiante) => {
    let nuevoEstudiante = {
        nombre:estudiante.nombre,
        matematicas:estudiante.matematicas,
        ingles:estudiante.ingles,
        programacion:estudiante.programacion
    };
    estudiantes.push(nuevoEstudiante);
};

const verEstudiantes=()=>{
    // console.log(estudiantes);
    document.getElementById("respuesta").innerHTML=estudiantes;
};

module.exports = {
    crear,
    verEstudiantes
}
