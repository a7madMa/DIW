// Arrays o arreglos

const tecnologias = [20, 30, 40]

//Aquí visualizaremos posiciones o índices en una columna a la derecha
console.log(tecnologias)

//Con table veremos los índices a la izquierda de la tabla
console.table(tecnologias)

//Así podemos acceder mediante índices un dato:
console.log(tecnologias[2])

//Si accedemos a un dato o índice que no esta creado será 'undefined'
console.log(tecnologias[4])


// MODIFICAR ARRAYS

// Mutación directa vs. Inmutabilidad en React:
// Si cambias un objeto de manera inmutable, creas una nueva copia del objeto con los cambios, en lugar de modificar directamente el objeto original. 
// Esto es esencial para 
// Si un objeto ha sido mutado directamente, React podría no detectar el cambio porque el referente (la referencia en memoria) del objeto sigue siendo
// el mismo. Esto puede llevar a que el componente no se actualice correctamente.

const lenguajes = ["JAVA", "C++", "PHYTON", "React"]

//Podemos añadir datos a un índice vacío y se saltaría los que no estan definidos.
lenguajes[10] = 'HTML'
console.table(lenguajes)

//Añadimos dato mutando el objeto (React no detecta ningún cambio), lo añadirá despues del último índice definido.
lenguajes.push('Nest.js')
console.table(lenguajes)

//Creamos un objeto igual añadiendo datos nuevos. (Así no muta)
const nuevoArray = [...lenguajes, 'Javascript']
console.table(nuevoObjeto)

//Elimina el primer elemento mutándolo
lenguajes.shift()
console.table(lenguajes)

// Creamos nuevo objeto eliminando el primer elemento sin mutarlo, function accede a cada elemento del objeto y filter permite sacar o meter elementos
// según una condición.
const lenguajes2 = lenguajes.filter(function(variable)  {
    if(variable !== 'C++'){
        return variable
    }
})
console.table(lenguajes2)  //Mandamos el elemento a lenguajes2


// Map al igual que filter accede a cada elemento pero si no añadimos ELSE a la condición, no devuelve los que quedan fuera (undefined), filter si.
// Aquí modificamos una variable sin mutar el objeto.
const lenguajes3 = lenguajes.map(function(variable){
    if(variable === 'Nest.js'){
        return 'JAVASCRIPT'
    } //else {
      //  return tech
    //}
})

console.table(lenguajes3)


