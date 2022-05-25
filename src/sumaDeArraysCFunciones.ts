let array1: number[] = new Array(6);
let array2: number[] = new Array(6);
let sumaDeArrays: number[] = new Array(0);

for (let i = 0; i < 6; i++) {
  array1[i] = Number(
    prompt("Ingreso numero: " + (i + 1) + "\nIngrese 6 numeros: ")
  );
}
console.log(array1);
for (let i = 0; i < 6; i++) {
  array2[i] = Number(
    prompt("Ingreso numero: " + (i + 1) + "\nIngrese 6 numeros a sumar: ")
  );
}
console.log(array2);

function sumarArrays(arreglo1: number[], arreglo2: number[]) {
  for (let i = 0; i < 6; i++) {
    sumaDeArrays[i] = arreglo1[i] + arreglo2[i];
  }
}

sumarArrays(array1, array2);
console.log(
  "El resultado de la suma de sus numero entre si, es: \n" + sumaDeArrays
);
