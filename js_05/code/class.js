'use strict';

//object-oriented programing
//class: template
//object: instance of a class
//Javascript classes
// - introduced in ES6
// - syntactical sugar over prototype-based inheritance

// 1. Class declarations

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // methods
  speak() {
    console.log(`${this.name} : hello! I'm ${this.age} years old`)
  }
}

const ellie = new Person('ellie', 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

