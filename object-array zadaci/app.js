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

// 4. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following
// books.

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
