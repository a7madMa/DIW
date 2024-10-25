//Template Strings y concatenación

const producto = ' Tablet 12 pulgadas'
const precio = 400
const marca = 'LG'

//Antigua
console.log('El producto es: ' + producto)
//Nueva
console.log(`El producto es: ${producto} `)

//Antigua
console.log(producto + " $ " + precio + "Dolares, marca: " + marca )
//Nueva
console.log(`${producto} $${precio} Dolares, marca: ${marca}`)