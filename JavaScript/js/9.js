
// Funciones que retornan valores

// Funciones normales
// const suma = function( numero1 = 0, numero2 = 0) {
//     console.log()
//     return numero1 + numero2
// }
// const resultado = suma(10, 10)
// console.log(resultado)

// Funciones ARROW
    // Si en la condición solo hay un parámetro no hace falta paréntesis

const sumaArrow = (numero1 = 0, numero2 = 0) => numero1 + numero2  // Con una sola línea no se pone return en las funciones Arrow, se da por hecho

const resultadoArrow = sumaArrow(10, 11)
console.log(resultadoArrow)

const lenguajes = ["JAVA", "C++", "PHYTON", "JAVASCRIPT", 'HTML']
const numeros =[10, 20, 30]

    //Filter

    const nuevoArray = lenguajes.filter((lenguaje) => lenguaje !== 'HTML')
    console.log(nuevoArray)

    const resultado = numeros.filter(numero => numero < 30)
    console.log(resultado)


    //Includes, revisa si existe una variable en el array

    const resultadoIncludes =  lenguajes.includes('C#')
    console.log(resultadoIncludes)

    //Some, devuelve si al menos una variable cumple la condición

    const resultadoSome = numeros.some( numero => numero > 15)
    if (resultadoSome) {
        console.log('Si hay variables')
    } else {
        console.log('No hay variables')
    }
    //console.log(resultadoSome)

    //Find, devuelve el primer elemento que cumple una condición

    const resultadoFind = numeros.find( numero => numero > 15)
    console.log(resultadoFind)

    // Every, devuelve true o false si todos cumplen la condición

    const resultadoEvery = numeros.every( numero => numero > 15)
    console.log(resultadoEvery)

    //Reduce, devuelve un acumulado del total, indicando 0 como valor inicial

    const resultadoReduce = numeros.reduce( (total, numero) => {

        console.log(total)
        console.log(numero)

        return total + numero
    }, 0)                                                           // 0 como valor inicial
    console.log(resultadoReduce)

        // Simplificado

        const resultadoReduce2 = numeros.reduce( (total, numero) => total + numero, 0)
        console.log(resultadoReduce2)