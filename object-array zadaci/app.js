// 1. Write a JavaScript program to list the properties of a JavaScript object.
// Sample object:
var student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12,
};
// Sample Output: name,sclass,rollno
for (let x in student) {
  console.log(x);
}

const kljucevi = Object.keys(student);
console.log(kljucevi);

// 2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
// Sample object:
var student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12,
};

delete student.rollno;
console.log(student);

console.log("4. zadatak");
// 4. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following
// books.
// 4. Napišite JavaScript program koji će prikazati status čitanja (tj. prikazati ime knjige, ime autora i status čitanja) za sledeće
//  knjige.

var library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

library.forEach((el) => {
  let status = el.readingStatus ? "procitana" : "neprocitana";
  console.log(
    `Ime knjige: ${el.title}, ime autora: ${el.author}, status: ${status} `
  );
});

console.log("3 zadatak");
// Write a JavaScript program to get the length of a JavaScript object.
// Sample object :
var student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12,
};

let studentt = Object.keys(student).length;
console.log(studentt);
