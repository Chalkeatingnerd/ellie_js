class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get age() {
    return this.age;
  }

  set age(value) {
    this.age = value;
  }

}

const user1 = new User('Steve', 'Jobs', 20);
console.log(user1.age);