import "./styles.css";

// 1er array para pedir los 6 primeros numeros
let ingresoDeNumeros1: number[] = new Array(6);
// Entra en bucle hasta que el usuario ingrese los 6 valores (en este caso ya determinado que son 6 y de tipo numericos)
for (let i = 0; i < 6; i++) {
  let num1 = Number(
    prompt("Ingreso numero: " + (i + 1) + "\nIngrese sus 6 primeros numeros: ")
  );
  ingresoDeNumeros1[i] = num1;
}
// Muestro en consola para el seguimiento de los ingresos/valores
for (let i = 0; i < ingresoDeNumeros1.length; i++) {
  console.log(
    "Posicion Array1: " + i + " Numero ingresado: " + ingresoDeNumeros1[i]
  );
}
// 2do array para los 6 numeros a sumar
let ingresoDeNumeros2: number[] = new Array(6);
for (let i = 0; i < 6; i++) {
  let num2 = Number(
    prompt("Ingreso numero: " + (i + 1) + "\nIngrese sus 6 numeros a sumar: ")
  );
  ingresoDeNumeros2[i] = num2;
}
for (let i = 0; i < ingresoDeNumeros2.length; i++) {
  console.log(
    "Posicion Array2: " + i + " Numero a sumar: " + ingresoDeNumeros2[i]
  );
}
// 3er array para el resultado
let sumaDeArrays = [];
let suma = 0;
for (let i = 0; i < 6; i++) {
  suma = ingresoDeNumeros1[i] + ingresoDeNumeros2[i];
  sumaDeArrays[i] = suma;
}

// Otra manera de mostrar el resultado que encontre
// Resultado como array va a mutar/cambiar en el resultado de la suma de los arrays 1 y 2
// let resultado = [];
// for (let i = 0; i < 6; i++) {
//   resultado.push(ingresoDeNumeros1[i] + ingresoDeNumeros2[i]);
// }

alert("El resultado de la suma de sus numero entre si, es: \n" + sumaDeArrays);
console.log(
  "El resultado de la suma de sus numero entre si, es: \n" + sumaDeArrays
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
