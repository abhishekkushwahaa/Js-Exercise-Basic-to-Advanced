// Use the `this` keyword in an object method.

const person = {
    fullname: "Abhishek",
    age: 19,
    address: "Gurugram",
    fullDetails: function (){
        return 'My name is ' + this.fullname + ' and I am ' + this.age + ' years old.';
    }
};
const fullDetails = person.fullDetails();
console.log(fullDetails);
