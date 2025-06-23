/* Crear programaque cuente del 1 al 10 que muestre 
cada numero por consola */

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

/* Indicar desde cuantos numeros del 2 al 20 son pares*/

let count = 0;
for (let i = 2; i <= 20; i++) {
  if (i % 2 === 0) {
    count++;
  }
}

/* Declarar una variable con una edad (x)
usando condicionales para mostrar si:
la persona es menor de edad, adulto joven, adulto */
let edad = prompt("Ingrese su edad:");
edad = parseInt(edad);
if (edad < 18) {
  console.log("Menor de edad");
} else if (edad >= 18 && edad < 30) {
  console.log("Adulto joven");
} else {
  console.log("Adulto");
}

/* Crear un programa que cuente vocales de una palabra */
let palabra = prompt("Ingrese una palabra:");
let vocales = "aeiouAEIOU";
let contador = 0;
for (let i = 0; i < palabra.length; i++) {
  if (vocales.includes(palabra[i])) {
    contador++;
  }
}
console.log(`La palabra tiene ${contador} vocales.`);

/* */

// let palabra2 = prompt("Ingrese otra palabra:");
// let vocales = 0;
// for (let i = 0; i < palabra2.length; i++) {
//   if (palabra2[i] === "a" || palabra2[i] === "e" || palabra2[i] === "i" || palabra2[i] === "o" || palabra2[i] === "u" ||
//       palabra2[i] === "A" || palabra2[i] === "E" || palabra2[i] === "I" || palabra2[i] === "O" || palabra2[i] === "U") {
//     vocales++;
//   }
// }