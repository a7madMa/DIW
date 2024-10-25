// Selectores

//Ahora en el DOM.html invocamos a script con la hoja correspondiente justa antes de acabar /body
// Seleccionamos un elemento y devolvemos operaciones mediante JavaScript

//Seleccionamos el primer elemento que tiene la clase .heading en el DOM

const heading =  document.querySelector('.heading')

console.log(heading)                //Objeto que representa el nodo HTML
console.log(heading.tagName)        //Etiqueta del elemento
console.log(heading.textContent)    //Texto que está entre las etiquetas de apertura y cierre
console.log(heading.classList)      //Lista de las clases que tiene el elemento heading
console.log(heading.id)             //En este caso no tiene ID


// querySelector te lleva a un elemento que cumpla la condición, querySelectorAll te trae todos.

const enlaces = document.querySelectorAll('.navegación a')
const enlaces2 = document.querySelector('.navegación a')

console.log(enlaces) 
console.log(enlaces2) 