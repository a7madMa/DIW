//Condicionales

const saldo = 4000
const pagar = 200
const tarjeta = true
const auth = true

if(auth) {
    console.log('Acceso al sistema...')
}else{
    console.log('No tienes permiso.')
}

// Comparador estricto: ===, compara valor y tipo de dato
// Comparador no estricto == , compara valor

if(saldo > pagar) {
    consoles.log('Puedes pagar')
}else if(tarjeta) {
    console.log('Puedes pagar')
} else {
    console.log('No puedes pagar')
}

// Logical Or y Logical And, || y &&

if(saldo > pagar || tarjeta) {
    consoles.log('Puedes pagar')
} else {
    console.log('No puedes pagar')
}

