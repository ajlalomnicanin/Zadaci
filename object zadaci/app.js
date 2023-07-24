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
