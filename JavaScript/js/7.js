// DESTRUCTURING DE ARRAYS

const lenguajes = ["JAVA", "C++", "PHYTON", "React"]

//Destructuring normal
const react = lenguajes[3]
console.log(react)

//Alternativa de javaScript, asigna por posiciones
const [ primero, segundo ,tercero , cuarto] = lenguajes
console.log(cuarto)

// Bucle For
//   Lenght para longitud del array

    for (let i = 0; lenguajes.length; i++){

        console.log(lenguajes[i])
    }

// forEach, ejecuta una función una vez por variable

    // Aquí nos lo imprime las mismas veces que variables
    lenguajes.forEach(function() {
        console.log('Desde la funcion')
    })

    // Imprimimos las variables una a una
    lenguajes.forEach(function(lenguaje) {
        console.log(lenguaje)

    })

// MAP, nos crea un array nuevo en base a la función

    const arrayMap = lenguajes.map(function(lenguaje){
        return lenguaje

    })
        console.log(arrayMap)


// For ... of, a diferencia de foreach se puede usar con cualquier objeto iterable

    for(let lenguaje of lenguajes) {

        console.log(lenguaje)
    }

    const string = "Hola";

    for (const char of string) {
         console.log(char);  // H, o, l, a
    }
