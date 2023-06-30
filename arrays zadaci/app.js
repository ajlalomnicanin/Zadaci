//4. Write a JavaScript function to get the last element of an array. Passing the parameter 'n' will return the last 'n' elements of the array.
// Test Data :
// console.log(last([7, 9, 0, -2]));
// console.log(last([7, 9, 0, -2],3));
// console.log(last([7, 9, 0, -2],6));
// Expected Output :
// -2
// [9, 0, -2]
// [7, 9, 0, -2]

function last(arr, n) {
  if (n === undefined) {
    return arr[arr.length - 1];
  } else {
    return arr.slice(Math.max(arr.length - n, 0));
  }
}
console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2], 3));
console.log(last([7, 9, 0, -2], 6));

// 5. Write a simple JavaScript program to join all elements of the following array into a string.
// Sample array : myColor = ["Red", "Green", "White", "Black"];
// Expected Output :
// "Red,Green,White,Black"
// "Red,Green,White,Black" // join
// "Red+Green+White+Black"

function myColor(arr) {
  return arr.toString();
}
console.log(myColor(["Red", "Green", "White", "Black"]));
//
function myColorr(arr) {
  return arr.join("+");
}
console.log(myColorr(["Red", "Green", "White", "Black"]));

// 6.Write a JavaScript program that accepts a number as input and inserts dashes
//  (-) between each even number. For example if you accept 025468 the output should be 0-254-6-8.

function first(num) {
  let noviBroj = num[0];
  for (let i = 1; i < num.length; i++) {
    if (num[i] % 2 === 0 && num[i - 1] % 2 === 0) {
      noviBroj += "-" + num[i];
    } else {
      noviBroj += num[i];
    }
  }
  return noviBroj;
}
console.log(first("025468"));

// 7. Write a JavaScript program to sort the items of an array.
// Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
// Sample Output : -4,-3,1,2,3,5,6,7,8

function sortniz(niz) {
  return niz.sort(function (a, b) {
    return a - b;
  });
}
console.log(sortniz([-3, 8, 7, 6, 5, -4, 3, 2, 1]));

// 8. Write a JavaScript program to find the most frequent item in an array.
// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output : a ( 5 times )

function aFind(arr) {
  countur = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "a") {
      countur++;
    }
  }
  return countur;
}
console.log(aFind([3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3]));

// 9. Write a JavaScript program that accepts a string as input and swaps the case of each character
// . For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.

function casse(string) {
  let newString = "";
  for (let i = 0; i < string.length; i++)
    if (string[i] === string[i].toUpperCase()) {
      newString += string[i].toLowerCase();
    } else {
      newString += string[i].toUpperCase();
    }
  return newString;
}
console.log(casse("The Quick Brown Fox"));

// 10. Write a JavaScript program that prints the elements of the following array.
// Note : Use nested for loops.
// Sample array : var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
// Sample Output :
// "row 0"
// " 1"
// " 2"
// " 1"
// " 24"
// "row 1"
// ------
// ------

function printElements(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`row ${i}`);
    for (let j = 0; j < arr[i].length; j++) {
      console.log(arr[i][j]);
    }
    console.log("----");
  }
}
var a = [
  [1, 2, 1, 24],
  [8, 11, 9, 4],
  [7, 0, 7, 27],
  [7, 4, 28, 14],
  [3, 10, 26, 7],
];
printElements(a);

console.log("ili");
// preko return
function printElements2(arr) {
  let niz = "";
  for (let i = 0; i < arr.length; i++) {
    niz += "red " + i + "\n"; //\n je za sledeci red
    for (let j = 0; j < arr[i].length; j++) {
      niz += " " + arr[i][j] + "\n";
    }
    niz += "----- \n";
  }
  return niz;
}
console.log(
  printElements2([
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27],
    [7, 4, 28, 14],
    [3, 10, 26, 7],
  ])
);
