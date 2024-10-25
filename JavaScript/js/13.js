//Módulos ECMAScript

/*
Indicamos en index.html que la hoja es de tipo módulo
        <script src ="js/13 Modulos.js" type="module"></script> 

Ahora mediante 'export' exportamos funciones a las demas hojas
Y en la hoja donde llamamos a la función usamos import asi:
        import { sumar } from './13 Modulos.js'

También podemos cambiar el nombre a la función al importar:
        import { restar as resta } from './13 Modulos.js'

*/

export function sumar(n1, n2) {
    return n1 + n2
}

export function restar(n1, n2) {
    return n1 - n2
}

/*Otra forma es exportar solo las funciones despues de ser creadas:

        export {
            sumar,
            restar
        }

*/

// Export default, solo una por archivo y no hay que nombrarlo entre {} al importar

export default function multiplicar(n1, n2){

    return n1 * n2
}
export function dividir(n1, n2){

    return n1 / n2
}

/* Se importa diferente, directamente y sin llaves:
     import multiplicar, { sumar, restar } from './13 Modulos.js'

ARROW FUNCTIONS: */

export const sumaArrow = (n1,n2) => n1 + n2
export const restaArrow = (n1,n2) => n1 - n2
export const multiplicaArrow = (n1,n2) => n1 * n2
export const divideArrow = (n1,n2) => n1 / n2