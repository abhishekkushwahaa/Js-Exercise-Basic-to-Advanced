// Create an object constructor and instantiate objects.

function Person(name, age) {
    this.name = name;
    this.age = age;
}
const person1 = new Person('Abhishek', 19);
console.log(person1);
console.log(person1.name);