/*
Fetch API con Promises
      URL: jsonplaceholder.typicode.com

      Recursos, comments para este ejemplo.
*/
const url = 'https://jsonplaceholder.typicode.com/comments'

fetch(url)                  //Conecta a la URL, en consola vemos 'Prototype' con métodos como text o json.

    .then((respuesta) => {
        //Si conecta veremos la propiedad 'ok' como true.
        console.log(respuesta)  
        //Si tengo respuesta, la quiero como json.
        return respuesta.json()
    })                    
    .then(dato => {
        console.log(dato)
    })
        //Con fetch el 'catch' solo dará error si tenemos problemas de red.
    .catch(error => {
        console.log(error)
    })

// Con Funciones Arrow, aquí ponemos 'if' para localizar un error .

fetch(url)                 
    .then((respuesta) => {
       
       if(respuesta.ok) {
        return respuesta.json()
       }
       throw new Error('Hubo un error')
    })                    
    .then(dato => console.log(dato))
    .catch(error => console.log(error.message))