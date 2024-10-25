//Ternarios

const saldo = 1001
const pagar = 1200
const tarjeta = true
const auth = true

// if(auth) {
//     console.log('Acceso al sistema...')
// }else{
//     console.log('No tienes permiso.')
// }

auth ? 
    console.log('Acceso al sistema...') : 
    console.log('No tienes permiso')

saldo > pagar ?
    console.log('Si puedes pagar') :

    tarjeta ?
    console.log('Puedes pagar con tarjeta') :
    console.log('No puedes pagar')


// Más breve

saldo > pagar || tarjeta ?
    console.log('Si puedes pagar') :
    console.log('No puedes pagar')