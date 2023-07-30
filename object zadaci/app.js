// 1. Write a JavaScript program to create a class called "Person" with properties for name, age and
//  country. Include a method to display the person's details. Create two instances of the 'Person' class
//   and display their details.

class Person {
  constructor(name, age, country) {
    this.name = name;
    this.age = age;
    this.country = country;
  }
  //  metoda za prikazivanje detalja
  displayDetails() {
    return ` Name: ${this.name}, age: ${this.age}, contry: ${this.country}`;
  }
}
const person1 = new Person("Ajla", 22, "Serbia");
console.log(person1.displayDetails());

// 2. Write a JavaScript program to create a class called 'Rectangle' with properties for width and height. Include two methods to
//  calculate rectangle area and perimeter. Create an instance of the 'Rectangle' class and calculate its area and perimeter.

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  area() {
    const povrsina = this.width * this.height;
    return `Povrsina je: ${povrsina}`;
  }
  perimeter() {
    // formula za obim
    const obim = 2 * (this.width + this.height);
    return `Obim je: ${obim}`;
  }
}
let rectangle1 = new Rectangle(50, 60);
console.log(rectangle1.area());
console.log(rectangle1.perimeter());

// 3. Write a JavaScript program that creates a class called 'Vehicle' with properties for make, model, and year. Include a method to
// display vehicle details. Create a subclass called 'Car' that inherits from the 'Vehicle' class and includes an additional property for
//  the number of doors. Override the display method to include the number of doors.
