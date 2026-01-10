"use strict";

// (1) 'this' in global context/context
console.log(this); // globalObject - window, global




// (2) 'this' inside a function
function abc() {
  // the value of 'this' depends on strict/non-strict mode
  console.log(this);
}
abc(); // undefine in non-strict mode






// (3) 'this' in strict mode - ('this' substitution)
    // if the value of 'this' keyword is undefined or null, 'this' keyword will be replaced with globalObject only in non-strict mode






// (4) 'this' keyword value depends on how function is called (window)

// in strict-mode
abc(); // undefined in non strict mode
window.abc(); // window{}






// (5) 'this' inside a object's method

const student1 = {
  name: "Aslam",
  marks: 90,
  GPA: function () {
    console.log("this inside an object: ", this);
    console.log("GPA: ", this.marks / 10); // 9, value of 'this' = student1 object
  },
};

student1.GPA(); // obj object



// (6): 'call', 'apply', 'bind' methods (sharing methods)

const student2 = {
    name: "Salam",
    marks: 40,
}

student1.GPA.call(student2); // value of 'this' = student2






// (7) Arrow functions and 'this' keyword

const student3 = {
    name: "Zayeem",
    marks: 80,
    GPA: () => {
        console.log("this inside arrow function: ", this); // not student3, but its enclosing lexical context - window/globalObject
        console.log("GPA: ", this.marks / 10); // undefined
    }
}

student3.GPA(); // window/globalObject


// (8) 'this' inside a nested function

const student4 = {
    name: "Khan",
    marks: 70,
    GPA: function() {
        console.log("this inside method: ", this); // student4 object

        function nestedFunction() {
            console.log("this inside nested function: ", this); // undefined in strict mode, window/globalObject in non-strict mode
        }

        nestedFunction();
    }
}

student4.GPA();

// (9) Solution to nested function 'this' problem - using arrow function

const student5 = {
    name: "Ali",
    marks: 60,
    GPA: function() {
        console.log("this inside method: ", this); // student5 object

        const nestedFunction = () => {
            console.log("this inside nested arrow function: ", this); // student5 object
        }

        nestedFunction();
    }
}

student5.GPA();



// (10) 'this' keyword in DOM

document.getElementById("myButton").addEventListener("click", function() {
    console.log("'this' inside DOM event listener: ", this, this.tagName); // the element that received the event - myButton (HTML Button Element)
});

document.getElementById("myButton").addEventListener("click", () => {
    console.log("'this' inside DOM event listener arrow function: ", this); // window/globalObject
}); 

// (11) this inside class, constructor function

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        console.log("this inside constructor: ", this); // the instance being created
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

const person1 = new Person("John", 30);
person1.greet();

function Car(make, model) {
    this.make = make;
    this.model = model;
    console.log("this inside constructor function: ", this); // the instance being created
}

Car.prototype.getDetails = function() {
    console.log(`Car Make: ${this.make}, Model: ${this.model}`);
}

const car1 = new Car("Toyota", "Corolla");
car1.getDetails();  

// (12) Summary of 'this' keyword behavior
/*
1. Global Context: 'this' refers to the global object (window in browsers).
2. Function Context: In non-strict mode, 'this' refers to the global object; in strict mode, it is undefined.
3. Object Method: 'this' refers to the object that owns the method.
4. call/apply/bind: 'this' can be explicitly set to any object.
5. Arrow Functions: 'this' is lexically bound to the surrounding context.
6. DOM Events: 'this' refers to the element that received the event.
7. Classes/Constructor Functions: 'this' refers to the instance being created.
*/