// `forEach` Method
{
  // Example 1: Print all elements
  // {
  //     let fruits = ["Apple", "Banana", "Mango", "Orange"];
  //     fruits.forEach((fruit) => {console.log(fruit)});
  // }
  // Example 2: Print with index
  // {
  //     let colors = ["Red", "Green", "Blue"];
  //     colors.forEach((color) => {console.log(color)});
  // }
  // Example 3: Calculate sum using external variable
  // {
  //     const numbers = [10, 20, 30, 40, 50];
  //     let sum = 0;
  //     numbers.forEach((num)=>{sum+=num});
  //     console.log(`Totol: ₹${sum}`)
  // }
  // Example 4: Add formatted prices
  // {
  //     const prices = [99, 149, 299, 499];
  //     prices.forEach((item)=>{console.log(`₹${item}.00`)})
  // }
  // Example 5: Push to another array
  // {
  //     const name = ["Ali", "Mahmood", "Zubair"];
  //     const upperNames = [];
  //     name.forEach((name)=>{upperNames.push(name.toUpperCase())})
  //     console.log(upperNames);
  // }
  // Example 6: Print multiplication table
  // {
  //     const numbers = [1, 2, 3, 4, 5];
  //     numbers.forEach((num)=>{console.log(`5 x ${num} = ${5*num}`)})
  // }
  // Example 7: Working with objects
  // {
  //     const students = [
  //         {
  //             name: "Khalid",
  //             age: 20
  //         },
  //         {
  //             name: "Sultan",
  //             age: 22
  //         },
  //         {
  //             name: "Zaheer",
  //             age: 19
  //         }
  //     ]
  //     students.forEach((student) => {
  //         console.log(`${student.name} is ${student.age} years old`)
  //     })
  // }
  // Example 8: Checking conditions
  // {
  //     const scores = [82, 92, 78, 45, 90];
  //     scores.forEach((score)=>{
  //         if(score>=80){
  //             console.log(`${score}, Excellent!`);
  //         } else {
  //             console.log(`${score}, Keep trying!`)
  //         }
  //     })
  // }
}

// The `map` Method
{
  // Example 1: Double all numbers
  // {
  //     const numbers = [1, 2, 3, 4, 5];
  //     const double = numbers.map((elem)=>{
  //         return elem * 2;
  //     })
  //     console.log(double);
  //     console.log(numbers); // remains unchanged
  // }
  // Example 2: Convert to uppercase
  // {
  //     const names = ["Ali", "Abdullah", "Abdul Rahman"];
  //     const upperNames = names.map(name=>name.toUpperCase());
  //     console.log(upperNames);
  // }
  // Example 3: Square all numbers
  //   {
  //     const numbers = [1, 2, 3, 4, 5];
  //     const square = numbers.map((num) => num ** 2);
  //     console.log(square);
  //   }
  // Example 4: Extract object properties
  //   {
  //     const students = [
  //         {
  //             name: "Ali",
  //             marks: 84
  //         },
  //         {
  //             name: "Khalid",
  //             marks: 92
  //         },
  //         {
  //             name: "Abdullah",
  //             marks: 99
  //         }
  //     ];
  //     const studentNames = students.map((studentObj) => studentObj.name);
  //     console.log(studentNames)
  //   }
  // Example 5: Add GST to prices
  // {
  //     const prices = [100, 200, 300, 400];
  //     const pricesWithGST = prices.map((price)=>price*1.18);
  //     console.log(pricesWithGST);
  // }
  // Example 6: Create full names
  // {
  //     const firstNames = ["Shaik", "Khalid", "Zubair"];
  //     const lastNames = ["Khadeer", "Khan", "Ullah"];
  //     const fullNames = firstNames.map((firstName, index)=>firstName + " " + lastNames[index]);
  //     console.log(fullNames)
  // }
  // Example 7: Format as currency
  // {
  //     const amounts = [1000, 2500, 500, 1010];
  //     const formatted = amounts.map((amount)=>`₹${amount}.00`)
  //     console.log(formatted)
  // }
  // Example 8: Create HTML elements
  // {
  //     const items = ["Home", "About", "Services", "Contact"];
  //     const menuItems = items.map((item)=>`<li>${item}</li>`);
  //     console.log(menuItems);
  // }
  // Example 9: Temperature conversion
  //   {
  //     const celsius = [0, 10, 20, 30, 40];
  //     const fahrenheit = celsius.map(
  //       (temperature) => `${(temperature * 9) / 5 + 32}°F`
  //     );
  //     console.log(fahrenheit);
  //   }
  // Example 10: Add index to items
  //   {
  //     const fruits = ["Apple", "Banana", "Mango"];
  //     const fruitsWithIndex = fruits.map(
  //       (fruit, index) => `${index + 1}. ${fruit}`
  //     );
  //     console.log(fruitsWithIndex);
  //   }
}

// The `filter` Method
{
  // Example 1: Get even numbers
  // {
  //     const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  //     const evenNums = nums.filter(num => num % 2 == 0);
  //     console.log(evenNums);
  // }
  // Example 2: Get odd numbers
  // {
  //     const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  //     const oddNums = numbers.filter(num => num % 2 != 0);
  //     console.log(oddNums);
  // }
  // Example 3: Get passing grades
  // {
  //     const grades = [45, 78, 89, 43, 89, 90];
  //     const passingGrades = grades.filter((grade) => grade >= 80);
  //     console.log(passingGrades);
  // }
  // Example 4: Filter by string length
  // {
  //     const words = ["hello", "hi", "bye", "nice", "world"];
  //     const filteredWords = words.filter(word => word.length > 3)
  //     console.log(filteredWords)
  // }
  // Example 5: Get adults only
  // {
  //     const people = [
  //         {
  //             name: "Jhon",
  //             age: 17
  //         },
  //         {
  //             name: "Mike",
  //             age: 23
  //         },
  //         {
  //             name: "Emma",
  //             age: 17
  //         },
  //         {
  //             name: "Tom",
  //             age: 32
  //         }
  //     ];
  //     const onlyAdults = people.filter(person => person.age >=18 );
  //     console.log(onlyAdults);
  // }
  // Example 6: Get names starting with "A"
  // {
  //     const names = ["Alice", "Bob", "Andrew", "Charlie", "Amanda"];
  //     const aNames = names.filter(name => name.startsWith('A'));
  //     console.log(aNames);
  // }
  // Example 7: Filter affordable items
  // {
  //     const products = [
  //         {
  //             name: "Laptop",
  //             price: 80000
  //         },
  //         {
  //             name: "Mouse",
  //             price: 500
  //         },
  //         {
  //             name: "Keyboard",
  //             price: 1000
  //         },
  //         {
  //             name: "Monitor",
  //             price: 15000
  //         }
  //     ]
  //     const affordables = products.filter(product => product.price < 2000);
  //     console.log(affordables);
  // }
  // Example 8: Remove specific items
  // {
  //     const fruits = ["apple", "banana", "mango", "apple", "orange"];
  //     const withoutApple = fruits.filter(fruit => fruit != "apple");
  //     console.log(withoutApple);
  // }
  // Example 9: Get positive numbers
  // {
  //     const numbers = [-5, -3, -1, 0, 1, 3, 5];
  //     const positiveOnly = numbers.filter(num => num > 0);
  //     console.log(positiveOnly);
  // }
  // Example 10: Get completed tasks
  // {
  //     const tasks = [
  //       {
  //         task: "Buy Milk",
  //         done: true,
  //       },
  //       {
  //         task: "Go to gym",
  //         done: false,
  //       },
  //       {
  //         task: "Clean Room",
  //         done: true,
  //       },
  //       {
  //         task: "Study",
  //         done: false,
  //       },
  //     ];
  //     const completedTasks = tasks.filter((task) => task.done);
  //     console.log(completedTasks);
  // }
}

// `every` Method
{
  // Example 1: Check if all are adults
  // {
  //     const ages = [22, 34, 27, 19, 45];
  //     const allAdults = ages.every((age)=>age>=18);
  //     console.log(allAdults);
  // }
  // Example 2: Check if all failed
  // {
  //     const ages = [20, 25, 17, 30, 22];
  //     const allAdults = ages.every(age => age>=18);
  //     console.log(allAdults);
  // }
  // Example 3: Check if all numbers are positive
  // {
  //     const numbers = [5, 10, 15, 20];
  //     const isPositive = numbers.every(num => num > 0);
  //     console.log(isPositive);
  // }
  // Example 4: Check if all students passed
  // {
  //     const marks = [78, 85, 92, 67, 89];
  //     const allPass = marks.every(mark => mark > 50);
  //     console.log(allPass);
  // }
  // Example 5: Check if all products are in stock
  //   {
  //     const products = [
  //       {
  //         name: "Laptop",
  //         inStock: true,
  //       },
  //       {
  //         name: "Mouse",
  //         inStock: true,
  //       },
  //       {
  //         name: "Keyboard",
  //         inStock: false,
  //       },
  //     ];
  //     const allAvailable = products.every(product => product.inStock);
  //     console.log(allAvailable);
  //   }
}

// `some` Method
{
  // Example 1: Check if any teenager exists
  //   {
  //     const ages = [20, 25, 17, 30, 22];
  //     const hasTeenager = ages.some((age) => age >= 20);
  //     console.log(hasTeenager);
  //   }
  // Example 2: Check if any negative number
  //   {
  //     const numbers = [5, 10, 20, -2, 15];
  //     const hasNegative = numbers.some((num) => num > 0);
  //     console.log(hasNegative);
  //   }
  // Example 3: Check if any student failed
  //   {
  //     const marks = [75, 85, 92, 45, 89];
  //     const anyoneFailed = marks.some(mark => mark < 50);
  //     console.log(anyoneFailed);
  //   }
  // Example 4: Check if any product is cheap
  //   {
  //     const prices = [1500, 2000, 450, 3000];
  //     const hasCheap = prices.some(item => item < 500);
  //     console.log(hasCheap);
  //   }
  // Example 5: Check if any task is incomplete
  //   {
  //     const tasks = [
  //       {
  //         task: "Buy milk",
  //         done: true,
  //       },
  //       {
  //         task: "Clean Room",
  //         done: false,
  //       },
  //       {
  //         task: "Study",
  //         done: true,
  //       },
  //     ];
  //     const hasIncomplete = tasks.some((task) => task.done);
  //     console.log(hasIncomplete);
  //   }
}

// comparing `some` and `every`
{
  // Example 1: Age checking
  // {
  //     const ages = [20, 25, 18, 30, 22];
  //     // ALL MUST BE ADULT
  //     const allAdults = ages.every(age => age >= 18);
  //     console.log(allAdults);
  //     // AT LEAST ONE MUST ADULT
  //     const atLeastAdult = ages.some(age => age >= 18);
  //     console.log(atLeastAdult);
  // }
  // Example 2: With one failing case
  // {
  //     const ages = [20, 25, 15, 30, 22];
  //     // ALL MUST BE ADULTS
  //     const allAdults = ages.every(age => age >= 18);
  //     console.log(allAdults);
  //     // ATLEAST ONE MUST BE ADULT
  //     const atLeastAdult = ages.some(age => age >= 18);
  //     console.log(atLeastAdult);
  // }
  // Example 3: Numbers check
  // {
  //     const numbers = [2, 4, 6, 8, 10];
  //     // ALL MUST BE EVEN
  //     const allEven = numbers.every(num => num % 2 == 0);
  //     console.log(allEven);
  //     // ATLEAST ONE MUST BE EVEN
  //     const someEven = numbers.some(num => num % 2 == 0);
  //     console.log(someEven);
  // }
  // Example 4: Exmpy cart scenario
  //   {
  //     const prices = [150, 200, 300];
  //     // ALL MUST BE AFFORDABLE
  //     const allAffordable = prices.every((price) => price < 200);
  //     console.log(allAffordable);
  //     // AT LEAST ONE MUST BE AFORDABLE
  //     const someAffordable = prices.some((price) => price > 200);
  //     console.log(someAffordable);
  //   }
}

// Practice problems
{
  // Problem 1: Create an array of 5 cities. use `forEach` to print "I want to visit [city name]" for each city.
  // {
  //     const cities = ["NYC", "London", "Paris", "Cairo", "Tokyo"];
  //     cities.forEach((city)=>console.log(`I want to visit ${city}`));
  // }
  // Problem 2: Create an array of 5 numbers. Use `map` to create a new array where each number is increased by 100
  // {
  //     const numbers = [20, 30, 40, 50, 60];
  //     const newArray = numbers.map(num => num + 100);
  //     console.log(`new array`, newArray);
  //     console.log(`old array`, numbers);
  // }
  // Problem 3: Create an array of numbers from 1 to 20. Use `filter` to get only numbers divisible by 3
  // {
  //     const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  //     const filteredArray = numbers.filter(num => num % 3 ==0);
  //     console.log(filteredArray);
  // }
  // Problem 4: Create an array of student objects with name and marks. Use map to create a new array of objects that includes a grade property (A for >= 90, B for >= 75, C for >= 50, F for < 50);
  //   {
  //     const students = [
  //       {
  //         name: "Ali",
  //         marks: 99,
  //       },
  //       {
  //         name: "Siraj",
  //         marks: 80,
  //       },
  //       {
  //         name: "Khalid",
  //         marks: 22,
  //       },
  //       {
  //         name: "Salman",
  //         marks: 70,
  //       },
  //     ];
  //     const newStudents = students.map((student) => {
  //       if (student.marks >= 90) {
  //         return { name: student.name, marks: student.marks, grade: "A" };
  //       } else if (student.marks >= 75) {
  //         return { name: student.name, marks: student.marks, grade: "B" };
  //       } else if (student.marks >= 50) {
  //         return { name: student.name, marks: student.marks, grade: "C" };
  //       } else {
  //         return { name: student.name, marks: student.marks, grade: "F" };
  //       }
  //     });
  //     console.log(newStudents);
  //   }
  // Problem 5: Create an array of products with name and price. Use filter to get products priced between 500 and 2000
  //   {
  //     const products = [
  //         {
  //             name: "Laptop",
  //             price: 80000
  //         },
  //         {
  //             name: "Keyboard",
  //             price: 1000
  //         },
  //         {
  //             name: "Mouse",
  //             print: 499
  //         },
  //         {
  //             name: "Mobile Phone",
  //             print: 20000
  //         }
  //     ]
  //     const affordableProducts = products.filter(product => product.price > 500 && product.price < 2000);
  //     console.log(affordableProducts);
  //   }
  // Problem 6: Create an array of 5 numbers. Check if all numbers are greater than 10
  //   {
  //     const arr = [23, 45, 65, 32, 10];
  //     const isGreaterFive = arr.every(num => num > 5);
  //     console.log(isGreaterFive);
  //   }
  // Problem 7: Create an array of words. Check if any word contains the letter 'z'
  //   {
  //     const words = ["hello", "zayeem", "welcome", "to", "coding"]
  //     const isZExists = words.some(word => word.includes('z'));
  //     console.log(isZExists);
  //   }
  // Problem 8: Create an array of numbers. First filter odd numbers, then use map to square the remaining even numbers
  //   {
  //     const numbers = [2, 3, 4, 5, 6, 7, 8, 9];
  //     const resultArr = numbers.filter(num => num % 2 == 0).map(num => num ** 2);
  //     console.log(resultArr)
  //   }
}
