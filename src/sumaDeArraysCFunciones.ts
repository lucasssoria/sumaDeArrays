let array1: number[] = new Array(6);
let array2: number[] = new Array(6);
let sumaDeArrays: number[] = new Array(0);
let nums1 = 0;
let nums2 = 0;
function sumarArrays(nums1: number, nums2: number) {
  for (let i = 0; i < 6; i++) {
    nums1 = Number(
      prompt("Ingreso numero: " + (i + 1) + "\nIngrese 6 numeros: ")
    );
    array1[i] = nums1;
  }
  console.log(array1);
  for (let i = 0; i < 6; i++) {
    nums2 = Number(
      prompt("Ingreso numero: " + (i + 1) + "\nIngrese 6 numeros a sumar: ")
    );
    array2[i] = nums2;
  }
  console.log(array2);
  let suma = 0;
  for (let i = 0; i < 6; i++) {
    suma = array1[i] + array2[i];
    sumaDeArrays[i] = suma;
  }
}
sumarArrays(nums1, nums2);
console.log(
  "El resultado de la suma de sus numero entre si, es: \n" + sumaDeArrays
);
