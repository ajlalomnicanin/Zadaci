// 11. Write a JavaScript program to find the sum of squares of a numerical vector.
// Napisi JavaScript program koji pronalazi zbir kvadrata numeričkog vektora,
function first(arr) {
  let suma = 0;
  for (let i = 0; i < arr.length; i++) {
    // suma += arr[i] * arr[i];
    suma += Math.pow(arr[i], 2);
  }
  return suma;
}
console.log(first([1, 2, 3, 4, 5])); //55
// Math.pow - (2,3) - 2*2*2

// 12. Write a JavaScript program to compute the sum and product of an array of integers.
function second(arr) {
  let suma = 0;
  let proizvod = 1;
  for (let i = 0; i < arr.length; i++) {
    if (!isNaN(parseInt(arr[i])) && parseInt(arr[i]) > 0) {
      //da je broj i da se pretvori u niz a drugi uslov
      // da je broj veci od nula
      suma += arr[i];
      proizvod *= arr[i];
    }
  }
  return `suma iznosi ${suma}, a proizvod iznosi ${proizvod} `;
}
console.log(second([1, 2, 3, 4, 5, 6, -6, -7]));

// 14. Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).

function ukloniDuplikate(arr) {
  let noviNiz = [];
  for (let i = 0; i < arr.length; i++) {
    var element = arr[i].toLowerCase(); // sve elemente sam pretvorila u mala slova
    if (!noviNiz.includes(element)) {
      //Ako je noviNiz.includes(element) istinito, to znači da se element
      //  već nalazi u noviNiz i metoda includes() će vratiti true.

      // S druge strane, ako koristite !noviNiz.includes(element), to znači da je uslov "element
      //  nije prisutan u noviNiz". Ako je noviNiz.includes(element)
      //  lažno, tada !noviNiz.includes(element) će biti istinito i vratiti true.

      // U bloku if uslova, kada je !noviNiz.includes(element) istinito (odnosno kada element nije
      //  prisutan u noviNiz), koristi se metoda push() da bi se element dodao u noviNiz. Ako je
      //   !noviNiz.includes(element)
      noviNiz.push(element);
    }
  }
  return noviNiz;
}
console.log(
  ukloniDuplikate(["Jabuka", "Banana", "jabuka", "KRUSKA", "Jagoda", "kruska"])
);
