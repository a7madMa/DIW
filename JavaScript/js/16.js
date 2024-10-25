const url = 'https://jsonplaceholder.typicode.com/comments'

// Fetch API con Async / Await

//Recordamos como haciamos con Promises
// fetch(url)                 
//     .then((respuesta) => {
//        if(respuesta.ok) {
//         return respuesta.json()
//        }
//        throw new Error('Hubo un error')
//     })                    
//     .then(dato => console.log(dato))
//     .catch(error => console.log(error.message))

const consultarAPI = async () => {
    //Esperamos una respuesta
    const respuesta = await fetch(url)
    //Cuando la tenemos la retorna como json
    const dato = await respuesta.json()      
    console.log(dato)   
}
consultarAPI()

const consultarAPI2 = async () => {
   
    try {
        const respuesta = await fetch(url)
        if(!respuesta.ok) {
            throw new Error('Hubo un error')
        }

        const dato = await respuesta.json() 
        console.log(dato)

    }catch (error) {
         
        console.log(error.message)   // Lo probamos poniendo URL errónea.
    }}


consultarAPI2()