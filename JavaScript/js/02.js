// Objetos

const producto = {

    nombre : 'Tablet',
    precio : 300,
    disponible : false

}

//console.log(producto)
//console.table(producto)
//console.log(producto.precio)

//Destructuring

//const { nombre, precio, disponible } = producto

// De forma antigua se hacía:

// const nombre = producto.nombre 
// const precio = producto.precio
// const disponible = producto.disponible 
//console.log(nombre)
//console.log(precio)
//console.log(disponible)

const { nombre, precio, disponible } = producto
console.log(nombre)
console.log(precio)
console.log(disponible)


//Object Literal Enhacement ( el key y el value se llaman igual, no hace falta asignar)

const autenticado = true
const usuario = 'Juan'

const nuevoObjeto = {

    autenticado : autenticado,
    usuario : usuario
}

const nuevoObjeto1 = {

    autenticado,
    usuario
}

console.log(nuevoObjeto)

