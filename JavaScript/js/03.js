// Objetos - Manipulación

const producto = {

    nombre : 'Tablet',
    precio : 300,
    disponible : false

}

//Congela, no se puede modificar
Object.freeze(producto)

//No permite añadir o eliminar variables
Object.seal(producto)

//Reescribir un valor
producto.disponible = true

//Si no existe, añade
producto.imagen = 'imagen.jpg'

//Eliminar variable
delete producto.precio

//

console.log(producto)