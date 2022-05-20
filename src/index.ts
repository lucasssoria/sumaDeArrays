import "./styles.css";
// 1er array para pedir los 6 primeros numeros
let ingresoDeNumeros1: number[] = new Array(6);
let num1: number, i1: number;

for (i1 = 0; i1 < 6; i1++) {
  num1 = Number(
    prompt("Ingreso numero: " + (i1 + 1) + "\nIngrese sus 6 primeros numeros: ")
  );
  ingresoDeNumeros1[i1] = num1;
}
// 2do array para los 6 numeros a sumar
let ingresoDeNumeros2: number[] = new Array(6);
let num2: number, i2: number;

for (i2 = 0; i2 < 6; i2++) {
  num2 = Number(
    prompt("Ingreso numero: " + (i2 + 1) + "\nIngrese sus 6 numeros a sumar: ")
  );
  ingresoDeNumeros2[i2] = num2;
}
// 3er array para el resultado
let sumaDeArrays = [];
let suma = 0;
for (let i = 0; i < 6; i++) {
  suma = ingresoDeNumeros1[i] + ingresoDeNumeros2[i];
  sumaDeArrays[i] = suma;
}

// Otra manera de mostrar el resultado que encontre
// Es resultado como array = al recorrido y suma de los arreglos 1 y 2
// let resultado = [];
// for (let i = 0; i < 6; i++) {
//   resultado.push(ingresoDeNumeros1[i] + ingresoDeNumeros2[i]);
// }

alert("El resultado de la suma de sus numero entre si, es: " + sumaDeArrays);
console.log(
  "El resultado de la suma de sus numero entre si, es: " + sumaDeArrays
);

// Recorrido para saber la longitud minima de los arreglos
// let menorLongitud = Math.min(
//   ingresoDeNumeros1.length,
//   ingresoDeNumeros2.length
// );
//

// Intente crear una funcion que retorne los resultados pero FAIL
// function retornarValores(ingresoDeNumeros1: number, ingresoDeNumeros2: number) {
//   let suma1 = 0;
//   let suma2 = 0;
//   for (let i = 0; i < ingresoDeNumeros1.length; i++) {
//     suma1 = suma1 + ingresoDeNumeros1[i];
//   }
//   for (let i = 0; i < ingresoDeNumeros2.length; i++) {
//     suma2 = suma2 + ingresoDeNumeros2[i];
//   }
//   return suma1 + suma2;
// }
