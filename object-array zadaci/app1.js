// 5. Write a JavaScript program to get the volume of a cylindrical with four decimal places using object classes.
// Volume of a cylinder : V = πr2h
// where r is the radius and h is the height of the cylinder.

class Cilindar {
  constructor(visina, poluprecnik) {
    this.visina = visina;
    this.poluprecnik = poluprecnik;
  }
  zapremina() {
    return (Math.PI * this.poluprecnik ** 2 * this.visina).toFixed(4);
  }
}
var cilinder = new Cilindar(5, 8); //
console.log(cilinder.zapremina());


console.log("6.zadatak");
// Write a bubble sort algorithm in JavaScript.
// Note : Bubble sort is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted,
const arr = [6, 4, 0, 3, -2, 1];
// Expected Output : [-2, 0, 1, 3, 4, 6]
let arr2 = arr.sort((a, b) => a - b);
console.log(arr2);


console.log("7. zadatak");
// 7. Write a JavaScript program that returns a subset of a string.
// Sample Data: dog
// Expected Output: ["d", "do", "dog", "o", "og", "g"]









































