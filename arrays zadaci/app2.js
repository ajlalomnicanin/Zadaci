// 15. We have the following arrays :
// color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
// o = ["th","st","nd","rd"]
// Write a JavaScript program to display the colors in the following way :
// "1st choice is Blue ."
// "2nd choice is Green."
// "3rd choice is Red."
// - - - - - - - - - - - - -

function first(color, o) {
  let noviNiz = [];
  for (let i = 0; i < color.length; i++) {
    let numnastavci = i + 1 > 3 ? o[0] : o[i + 1];
    celokupno = [i + 1] + numnastavci + " choice is " + color[i];
    noviNiz.push(celokupno);
  }
  return noviNiz;
}
color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
o = ["th", "st", "nd", "rd"];

console.log(first(color, o));

// 6. Write a JavaScript program to find the leap years in a given range of years.
function years(starYear, endYear) {
  let prestupneG = [];
  for (let year = starYear; year <= endYear; year++) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      prestupneG.push(year);
    }
  }
  return prestupneG;
}
console.log(years(2000, 2020));
// Prestupna godina je godina koja ima 366 dana umesto standardnih 365 dana. Dodatni dan se dodaje 29.
//  februara. Postoji nekoliko pravila za određivanje prestupnih godina:

// Godine deljive sa 4 su prestupne godine. Na primer, 2012. godina je prestupna jer je deljiva sa 4.
// Međutim, godine deljive sa 100 nisu uvek prestupne. Na primer, 1900. godina je deljiva sa 4, ali nije
//  prestupna jer je takođe deljiva sa 100.
// Izuzetak od drugog pravila je da godine deljive sa 400 ipak budu prestupne. Na primer, 2000. godina je
//  prestupna jer je deljiva sa 400.

// 17. Write a JavaScript program to shuffle an array.

function shuffleArray(arr) {
  return arr.sort(() => Math.random() - 0.5);
}
console.log(shuffleArray([1, 2, 3, 4, 5, 6, 7, 8, 9]));
// 18. Write a JavaScript program to perform a binary search.
// Note : A binary search or half-interval search algorithm finds the position of a specified input value within an array sorted by key value.
// Sample array :
// var items = [1, 2, 3, 4, 5, 7, 8, 9];
// Expected Output :
// console.log(binary_Search(items, 1)); //0
// console.log(binary_Search(items, 5)); //4

// function first(niz, broj) {
//   let pocetak = 0;
//   let kraj = niz.length - 1;
//   while (pocetak <= kraj) {
//     let sredina = Math.floor((pocetak + kraj) / 2);
//     if (niz[sredina] === broj) {
//       return sredina;
//     } else if (niz[sredina] < broj) {
//       pocetak = sredina - 1;
//     } else {
//       kraj = sredina + 1;
//     }
//     pocetak++;
//   }

//   return ` Ne postoji taj broj`;
// }
// let niz = [1, 2, 3, 4, 5, 7, 8, 9];
// console.log(first(niz, 1));
// console.log(first(niz, 5));

// 19. There are two arrays with individual values. Write a JavaScript program to compute the sum of
// each individual index value in the given array.
// Sample array :
// array1 = [1,0,2,3,4];
// array2 = [3,5,6,7,8,13];
// Expected Output :
// [4, 5, 8, 10, 12, 13]
function arrays(array1, array2) {
  const newArray = [];
  let veciNiz = array1 > array2 ? array1 : array2;
  // let veciNiz = Math.max(array1, array2);
  for (let i = 0; i < veciNiz.length; ++i) {
    const suma = (array1[i] || 0) + (array2[i] || 0);
    newArray.push(suma);
  }
  return newArray;
}
console.log(arrays([1, 0, 2, 3, 4], [3, 5, 6, 7, 8, 13]));
