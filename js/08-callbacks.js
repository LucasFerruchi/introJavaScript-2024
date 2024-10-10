
// function multiplicar(numero) {
//     return numero * 2
// }

// const numeros = [1, 2, 3, 4, 5];

// Callback sincrono: Se ejecuta inmediatamente en orden que son llamados
// function procesarNumeros(numeros, multiplicar) {
//     const resultado = []
//     for (let i = 0; i < numeros.length; i++) {
//         resultado.push(multiplicar(numeros[i]))
//     }
//     return resultado
// }

// console.log(procesarNumeros(numeros, multiplicar))

// Callbacks asincronos: se ejecuntan despues de un tiempo, generalmente sirven para funciones que no sabemos cuando termiaran (ej, llamadas a servidores)

// function mostrarMensaje() {
//     console.log("Hola soy un mensaje, despues de 3 segundos")
//     setTimeout(() => { console.log("mensaje despues de 1 segundo") }, 1000)
// }

// setTimeout(mostrarMensaje, 3000)

// mostrarMensaje()


// console.log("Mensaje 1")
// setTimeout(() => {
//     console.log("Mensaje 2")
// }, 3000)
// console.log("Mensaje 3")

// Problemas potenciales (Callback Hell)
// Si no se organizan bien, los callbacks pueden dar lugar a un fenómeno llamado callback hell, donde las funciones se anidan de forma excesiva, creando código difícil de leer y mantener.
// doSomething(function (result) {
//     doSomethingElse(result, function (newResult) {
//         doThirdThing(newResult, function (finalResult) {
//             console.log('Todo hecho.');
//         });
//     });
// });
// Para mitigar este problema, existen soluciones como las promesas y la sintaxis async/await, pero esas son cuestiones más avanzadas.


// METODOS DE ARRAYS

// Metodo .SORT()
// ordena en orden alfabetico, de mayor a menor o al reves


// let nombresOrdenados = nombres.sort()
// console.log(nombresOrdenados)

// let numerosOrdenados = numeros.sort(function (a, b) {
//     return a - b
// })

// console.log(numerosOrdenados)

// Metodo .filter()
// devuelve todos los elementos que cumplan con el filtro
// let pares = numeros.filter((numero) => {
//     return numero > 100
// })

// console.log(pares)

// Metodo .find()
// devuelve el primer elemento que cumpla con la condicion
// let busquedaNombre = nombres.find((nombre) => {
//     return nombre.startsWith("J")
// })

// console.log(busquedaNombre)


// Metodo .findIndex()
// recorre todo el Array, y devuelve el indice del elemento que cumpla la condicion

// let indice = nombres.findIndex((nombre) => {
//     return nombre === "Antonio"
// })

// console.log(indice)

const numeros = [95, 46, 2, 67, 63, 612, 4, 874]

const nombres = ["Joaquin", "Lionel", "Angel", "Antonio", "Emiliano"]

// Metodo .forEach()
// recorre todo el array y realiza una funcion por cada elemento

// nombres.forEach((nombre) => {
//     console.log(nombre)
// })


// Metodo .map()
// recorre todo el array y devuelve uno nuevo 

// let resultados = numeros.map((numero) => {
//     return numero + 1
// })

// console.log(resultados)