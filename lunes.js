

// Manipular elementos HTML

const heading = document.querySelector('heading');
const elances = document.querySelector('navegacion a'); 

//Modificamos contenido

heading.textContent = ' Un nuevo heading';  
heading.id = ' Un nuevo heading';

// Eliminamos atributos
heading.removeAttribute('id');
heading.removaAttribute('class');