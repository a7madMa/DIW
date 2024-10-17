console.log("Hola mundo!");

let cliente = "Alfonso"; // let sepuede inicializar sin valor (undefined)
const cliente1 = "Juan"; // Variable global

//Symobol

const primerSymbol = Symbol(30);
const segundoSymbol = Symbol(30);

const alumno = {
  nombre: "Juan",
  edad: 20,
  cursando: true,
};

console.log(alumno.edad);
console.table(alumno);

//Destructuración

const { edad, nombre, cursando } = alumno;

//Mejora literal

const autetnicado = true;
const alumno1 = "Luis";
const nuevoAlumno = {
  autetnicado: autetnicado,
  alumno1: alumno1,
};

console.log(nuevoAlumno);

//Manipulación de objetos

Object.freeze(alumno); // No se puede modificar el objeto
Object.seal(alumno); // No se puede agregar ni eliminar propiedades (variables)

alumno.cursando = false;

//Añadir variable

alumno.foto = "foto.jpg";

console.log(alumno);

//Desectructura de dos o mas objetos

//Renombrar variables si tenemos nombres iguales

const profesor = {
  nombre: "Ana",
  activo: false,
  asignatura: {
    asignatura: "Sistemas Informáticos",
  },
};
const {
  nombre: nombreProfesor,
  asignatura: { DesarolloInterfaceWeb },
} = profesor;

console.log(nombreProfesor);
console.log(asignatura);
