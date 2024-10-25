//Declaración de funciones

function sumar(){
    console.log( 1 + 1 )
}
sumar()

//Ahora con parámetros, si ponemos uno por defecto ese se usara cuando no sea utilizado, así podemos prevenir errores

function sumaParametros( numero1 , numero2) {
    console.log( numero1 + numero2 )
}
sumaParametros(10,11)
sumaParametros(43)


function sumarParametros( numero1 = 0, numero2 = 0) {
    console.log( numero1 + numero2 )
}
sumarParametros(10,11)
sumarParametros(43)


//Function Expression

const suma = function( numero1 = 0, numero2 = 0) {
    console.log( numero1 + numero2 )
}

// function suma( numero1 = 0, numero2 = 0) {
//     console.log( numero1 + numero2 )
// }
suma(22,12)
suma(6)

//ARROW Functions

const sumaArrow = (numero1 = 0, numero2 = 0) => { 
    console.log( numero1 + numero2 )
}

// Si solo tienen una línea se pueden eliminar las llaves
//const sumaArrow = (numero1 = 0, numero2 = 0) => console.log( numero1 + numero2 )
    

sumaArrow(22,12)
sumaArrow(6)
