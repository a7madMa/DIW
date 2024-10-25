// Performance 

const url = 'https://jsonplaceholder.typicode.com/comments'
const url2 = 'https://jsonplaceholder.typicode.com/todos'
const url3 = 'https://jsonplaceholder.typicode.com/photos'

const consultarAPI2 = async () => {
   
    try {
        const inicio = performance.now()

        const respuesta = await fetch(url)
        // if(!respuesta.ok) {
        //     throw new Error('Hubo un error')
        // }
        const dato = await respuesta.json() 
        console.log(dato)

        const respuesta2 = await fetch(url2)
        const dato2 = await respuesta2.json() 
        console.log(dato2)

        const respuesta3 = await fetch(url3)
        const dato3 = await respuesta3.json() 
        console.log(dato3)

        const fin = performance.now()

        console.log(`El resultado es ${fin - inicio} ms`) // Así medimos cuanto tarda en ejecutarse el código de la página,
                                                          // A más url's mas tardará.

    }catch (error) {
         
        console.log(error.message)
    }}

consultarAPI2()


// Múltiple Async Await

const consultarAPI = async () => {
   
    try {
        const inicio = performance.now()

        //De la siguiente manera ahorramos código para acceder a varias url's accediendo a todas a la vez

        const[respuesta4, respuesta5, respuesta6] = await Promise.all([fetch(url), fetch(url2), fetch(url3)])

        const[dato4, dato5, dato6] = await Promise.all([respuesta4.json(), respuesta5.json(), respuesta6.json()])

        console.log(dato4)
        console.log(dato5)
        console.log(dato6)

        const fin = performance.now()

        console.log(`El resultado de la primera función es ${fin - inicio} ms`) 

    }catch (error) {
         
        console.log(error.message)
    }}

consultarAPI()