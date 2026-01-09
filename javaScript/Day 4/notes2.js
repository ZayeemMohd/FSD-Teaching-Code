// JavaScript Day 4.1: Advanced Array Methods

// Topic 1: .slice() method
{
  // Example 1: Basic slicing
  let numbers = [1, 2, 3, 4, 5];
  let sliced = numbers.slice(1, 4);
  console.log(sliced); //[2, 3, 4]
  console.log(numbers); //[1, 2, 3, 4, 5] (unchanged)

  // Example 2: Slicing from index to end
  let fruits = ["apple", "grapes", "banana", "mango", "orange"];
  let lastThree = fruits.slice(2);
  console.log(lastThree); //["banana", "mango", "orange"]
  console.log(fruits); //["apple", "grapes", "banana", "mango", "orange"]

  // Example 3: Getting first few elements
  let colors = ["red", "green", "blue", "white"];
  let fewColors = colors.slice(0, 2);
  console.log(fewColors); //["red", "green"]
  console.log(colors); //["red", "green", "blue", "white"]

  // Example 4: Using negative indices
  let letters = ["a", "b", "c", "d", "e"];
  console.log(letters.slice(-2)); // ['d', 'e'](last 2)
  console.log(letters.slice(1, -1)); // ['b', 'c', 'd'](exclude first and last)

  // Example 5: Creating a copy of entire array
  let original = [10, 20, 30];
  let copy = original.slice();
  copy[0] = 99;
  console.log(copy); // [99, 10, 20]
  console.log(original); // [10, 20, 30](unchanged)
}

// Topic 2: Array splice() - Advanced Usage
{
  // Example 1: Removing and capturing deleted elements
  let colors = ["red", "green", "blue", "yellow", "purple"];
  let removed = colors.splice(1, 3);
  console.log(removed); // ["green", "blue", "yellow"]
  console.log(colors); // ["red", "purple"]

  // Example 2: Replacing multiple elements
  let numbers = [1, 2, 3, 4, 5];
  numbers.splice(1, 3, 20, 30, 40); // [1, 20, 30, 40, 5]
  console.log(numbers);

  // Example 3: Inserting multiple elements without deleting
  let arr = [1, 5];
  arr.splice(1, 0, 2, 3, 4);
  console.log(arr); // [1, 2, 3, 4, 5]

  // Example 4: Removing from end using negative index
  let items = ["a", "b", "c", "d", "e"];
  let removedItems = items.splice(-2); // GPT: why the second argument doesn't work here
  console.log(removedItems); // ["d", "e"]
  console.log(items); // ["a", "b", "c"]

  //Example 5: Replacing single element
  let fruits = ["apple", "banana", "orange"];
  let removedFruit = fruits.splice(2, 1, "mango");
  console.log(`removed fruit is ${removedFruit}`); // removed fruit is orange
  console.log(fruits); // ["apple", "banana", "mango"]
}

// Topic 3: Array sort() method
{
  // Example 1: Sorting strings alphabetically
  let fruits = ["banana", "apple", "mango", "cherry"];
  let returingAsWell = fruits.sort();
  console.log(returingAsWell); // ["apple", "banana", "cherry", "mango"]
  console.log(fruits); // ["apple", "banana", "cherry", "mango"]

  // Example 2: Sorting numbers (warning: unexpected behaviour)
  let numbers = [10, 5, 40, 25, 1000];
  numbers.sort();
  console.log(numbers); // [10, 1000, 25, 40, 5] (sorted as strings!)

  // Example 3: Sorting numbers correctly with compare function
  let scores = [85, 92, 78, 95, 88];
  scores.sort((a, b) => a - b); // do b-a for descending order
  console.log(scores); // [78, 85, 88, 92, 95]

  // Example 4: Sorting in descending order
  let values = [2, 1, 4, 6, 11, 10];
  values.sort((a, b) => b - a);
  console.log(values); // [11, 10, 6, 4, 2, 1]

  // Example 5: Case-insensitive string sorting (usually it will do captical words then small words)
  let names = ["charlie", "Alice", "bob", "David"];
  let standardSort = names.slice().sort();
  console.log(standardSort); // ["Alice", "David", "bob", "charlie"]
  names.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
  console.log(names); // ["Alice", "bob", "charlie", "David"]
}

// Topic 4: Array join() Method
{
  // Example 1: Basic join with default separator
  let colors = ["red", "yellow", "green"];
  let joinedString = colors.join();
  console.log(joinedString); // "red,yellow,green"

  // Example 2: Join with space separator
  let words = ["Hello", "world", "Javascript"];
  let result = words.join(" ");
  console.log(result); // "Hello world Javascript"

  // Example 3: Join with hyphen
  let date = ["2025", 12, 31];
  let formatted = date.join("-");
  console.log(formatted); //"2025-12-31"

  // Example 4: Join with empty string
  let letters = ["j", "a", "v", "a"];
  let word = letters.join("");
  console.log(word); // "java"

  // Example 5: Join with custom separator
  let items = ["apple", "banana", "mango"];
  let list = items.join(" | ");
  console.log(list); // "apple | banana | mango"
}

// Topic 5: Array .toString() method
{
  // Example 1: Basic .toString()
  let numbers = [1, 2, 3, 4, 5];
  let str = numbers.toString();
  console.log(str); // "1,2,3,4,5"
  console.log(typeof str); // "string"

  // Example 2: .toString() with nested arrays
  let nested = [
    [1, 2],
    [3, 4],
  ];
  console.log(nested.toString()); // "1,2,3,4"

  // Example 3: .toString() vs .join()
  let fruits = ["apple", "banana", "mango"];
  console.log(fruits.toString()); // "apple,banana,mango"
  console.log(fruits.join()); // "apple,banana,mango"

  // Example 4: .toString with mixed types
  let mixed = [1, "hello", true, 3.14];
  console.log(mixed.toString()); // "1,hello,true,3.14"

  // Example 5: Using .toString for display
  let colors = ["red", "green", "blue"];
  console.log(`Colors: ${colors.toString()}`); // "Colors: red,green,blue"
}

// Topic 6: Creating arrays with Array() constructor
{
  // Example 1: Creating empty array
  let arr1 = new Array();
  console.log(arr1); // []
  console.log(arr1.length); // 0

  // Example 2: Creating array with specific length
  let arr2 = new Array(5);
  console.log(arr2); // [empty x 5]
  console.log(arr2.length); // 5

  // Example 3: Creating array with elements
  let arr3 = new Array(1, 2, 3, 4, 5);
  console.log(arr3); // [1,2,3,4,5]

  // Example 4: Array literal vs constructor
  let literal = [5]; // array with one element: 5
  let constructorArr = new Array(5); // array with length 5
  console.log(literal); // [5]
  console.log(constructorArr); // [empty x 5]

  // Example 5: Filling array after creation
  let numbers = new Array(3);
  console.log(numbers); // [empty x 3]
  numbers[0] = 1;
  numbers[1] = 2;
  numbers[2] = 3;
  console.log(numbers); // [1,2,3]
}

// Topic 7: Checking if something is an Array (wow)
{
  // Example 1: Basic array check
  let arr = [1, 2, 3];
  console.log(Array.isArray(arr)); // true

  // Example 2: Checking non-arrays
  console.log(Array.isArray("hello")); // false
  console.log(Array.isArray(2224)); // false
  console.log(Array.isArray(true)); // false

  // Example 3: Why typeof doesn't work
  let numbers = [1, 2, 3];
  console.log(typeof numbers); //"object" (not helpful)
  console.log(Array.isArray(numbers)); // true

  // Example 4: Checking even if it is an empty array
  let emptyArr = [];
  console.log(Array.isArray(emptyArr)); // true

  // Example 5: Using in conditional
  let data = [10, 20, 30];
  if (Array.isArray(data)) {
    console.log("It is an array with " + data.length + " elements");
  } else {
    console.log("Not an array");
  }
}

// Topic 8: Multidimensional Arrays
{
  // Example 1: 2D array - simple grid
  let grid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  console.log(grid[0][0]); // 1
  console.log(grid[1][1]); // 5
  console.log(grid[2][2]); // 9

  // Example 2: Students records with mutiple data
  let studentsData = [
    ["Alice", 20, [85, 90, 88]],
    ["Rafi", 22, [90, 92, 98]],
    ["Zaheer", 25, [66, 22, 60]],
  ];
  console.log(studentsData[1][0]); // "Rafi"
  console.log(studentsData[2][2][1]); // 22

  // Example 3: Seating arrangement
  let classroom = [
    ["Alice", "Zaki", "Obaid"],
    ["Akbar", "Ibrahim", "A. Kareem"],
    ["Sohaib", "Nawaz", "Hussain"],
  ];
  console.log(classroom[0][1]); // "Zaki" (front row, middle seat)
  console.log(classroom[2][2]); // "Hussain" (last row, right seat)

  // Example 4: Modifying nested arrays
  let matrix = [
    [1, 2],
    [3, 4],
  ];
  matrix[0][1] = 20;
  matrix[1][0] = 30;
  console.log(matrix); // [[1, 20], [30, 4]]

  // Example 5: Iterating through 2D Array
  let numbers = [
    [1, 2, 3],
    [4, 5, 6],
  ];
  console.log("Row 0: ", numbers[0]); // [1,2,3]
  console.log("Row 1: ", numbers[1]); // [4,5,6]
}

// Topic 9: Array length and empty elements
{
  // Example 1: Length property
  let arr = [10, 30, 20, 50];
  console.log(arr.length); // 4
  console.log(typeof arr.length); // number

  // Example 2: Changing length manually (truncates array) (wow)
  let numbers = [1, 2, 3, 4, 5];
  numbers.length = 2;
  console.log(numbers); // [1,2]

  // Example 3: Increasing length creates empty slots
  let items = [1, 2, 3, 4];
  items.length = 9;
  console.log(items); // [1,2,3,4, empty x 5]

  // Example 4: Adding elements beyond the current length
  let colors = ["red", "green"];
  colors[5] = "blue";
  console.log(colors); // ["red", "green", empty x 3, "blue"]
  console.log(colors.length); // 6

  // Example 5: Clearing an array (wow)
  let data = [1, 2, 3, 4, 5];
  data.length = 0;
  console.log(data); // []
}

// Topic 10: Combing multiple array methods
{
  // Example 1: clean, sort and join
  let tags = ["javascript", "HTML", "css", "React"];
  let cleaned = [];
  cleaned.push(tags[0].trim().toLowerCase());
  cleaned.push(tags[1].trim().toLowerCase());
  cleaned.push(tags[2].trim().toLowerCase());
  cleaned.push(tags[3].trim().toLowerCase());
  cleaned.sort();
  let result = cleaned.join(" , ");
  console.log(result); // "css, html, javascript, react"

  // Example 2: Slice and reverse
  let numbers = [1,2,3,4,5,6,7,8];
  let middle = numbers.slice(2,6);
  middle.reverse();
  console.log(middle); //[6,5,4,3]

  // Example 3: Concat and sort
  let list1 = ["zebra", "apple"];
  let list2 = ["mango", "banana"];
  let combined = list1.concat(list2);
  combined.sort();
  console.log(combined); // ["apple", "banana", "mango", "zebra"]

  // Example 4: splice and push
  let queue = ["first", "second", "third"];
  let removed = queue.splice(0,1);
  queue.push(removed[0]); // add to end
  console.log(queue); // ["second", "third", "first"]

  // Example 5: Multiple operations on arrays
  let scores = [85, 91, 78, 95, 88];
  scores.push(90);
  scores.sort((a,b) => b - a); // sort descending
  let top3 = scores.slice(0, 3);
  console.log(top3); // [95, 91, 90]

}

// Topic 11: Array best practices and common patterns
{
  // Example 1: Checking arrays
  let data = [1,2,3];
  if(Array.isArray(data) && data.length > 0){
    console.log("First element: ", data[0]);
  }

  // Example 2: Safe access to array elements
  let colors = ["red", "green", "blue"];
  let printIndex = 5;
  if(printIndex >= 0 && printIndex < colors.length){
    console.log(colors[printIndex]);
  } else {
    console.log("Index out of bound")
  }

  // Example 3: Creating a copy before modifying
  let original = [1,2,3,4,5];
  let copy = original.slice();
  copy.reverse();
  console.log(copy); // [5,4,3,2,1]
  console.log(original); // [1,2,3,4,5]

  // Example 4: Building arrays incrementally
  let evenNumbers = [];
  evenNumbers.push(2);
  evenNumbers.push(4);
  evenNumbers.push(6);
  evenNumbers.push(8);
  console.log(evenNumbers); // [2,4,6,8]

  // Example 5: Removing duplicates manually
  let num = [1, 2, 2, 3, 3, 3, 4];
  // here we have to add each element from num to unique only if it is not already present in the unique array
  let unique = [];
  if(unique.indexOf(num[0]) === -1){
    unique.push(num[0]);
  };
  if(unique.indexOf(num[1]) === -1){
    unique.push(num[1]);
  };
  if(unique.indexOf(num[2]) === -1){
    unique.push(num[2]);
  }
  // Continue pattern
}

// Topic 12: Working with array copies vs refrences
{
  // Example 1: Simple value vs array references
  let num1 = 5;
  let num2 = num1;
  console.log("num2 value is: ", num2); // 5
  num2 = 10;
  console.log("num2 value is: ", num2); // 10
  console.log("num1 value is: ", num1); // 5 (unchanged)

  let arr = [1,2,3];
  let arr2 = arr;
  console.log("arr2 is: ", arr); // [1,2,3]
  arr2[0] = 99;
  console.log("arr2 is: ", arr2); // [99,2,3]
  console.log("arr is: ", arr); // [99,2,3] (value is changed even in arr)

  // Example 2: Creating true copy with slice
  let original = [1,2,3];
  let copy = original.slice();
  console.log("original array is: ", original); // [1,2,3]
  console.log("copy array is: ", copy); // [1,2,3]
  copy[0] = 99; 
  console.log("copy array is: ", copy); // [99,2,3]
  console.log("original array is: ", original); // [1,2,3]

  // Example 3: Nested array - shallow copy issue
  let nested = [[1,2], [3,4]];
  let copy2 = nested.slice();
  copy2[0][0] = 99;
  console.log(nested); // [[99,2], [3,4]]

  // Example 4: Multiple refrences to same array
  let colors = ["red", "green", "blue"];
  let pallete1 = colors;
  let pallete2 = colors;
  console.log("colors array is: ", colors);
  console.log("Pallete1 array is: ", pallete1);
  console.log("Pallete2 array is: ", pallete2);
  pallete1.push("yellow");
  console.log("colors array is: ", colors);
  console.log("Pallete1 array is: ", pallete1);
  console.log("Pallete2 array is: ", pallete2);

  // Example 5: Comparing arrays
  let a = [1,2,3];
  let b = [4,5,6];
  let c = a;
  console.log("a === b", a === b); // a === b false
  console.log("a === c", a === c); // a === c true
}

// Topic 13: Array manipulation patterns
{
  // Example 1: Swapping elements
  let arr = ["a", "b", "c", "d"];
  let temp = arr[0];
  arr[0] = arr[3];
  arr[3] = temp;
  console.log("array is: ", arr);

  // Example 2: Rotationg arrays (move first to last)
  let numbers = [1,2,3,4,5];
  let first = numbers.shift();
  numbers.push(first);
  console.log(numbers); // [2,3,4,5,1]

  // Example 3: Removing specific value
  let items = ["apple", "banana", "mango", "banana"];
  let plsRemove = "banana";
  let index = items.indexOf(plsRemove); 
  if(index !== -1){
    items.splice(index, 1);
  };
  console.log("items: ", items); // ["apple", "mango", "banana"]

  // Example 4: Inserting at specific position
  let list = ["a", "c", "d"];
  list.splice(1, 0, "b");
  console.log(list); // ["a", "b", "c", "d"]

  // Example 5: Building array from pieces
  let part1 = [1,2];
  let part2 = [2,3];
  let part3 = [4,5];
  let complete = part1.concat(part2).concat(part3);
  console.log(complete); // [1,2,2,3,4,5,]
  console.log(part1); // [1,2]
}

// Topic 14: Array edge cases and gotchas
{
  // Example 1: Empty array is truthy
  let arr = [];
  if(arr){
    console.log("Empty array is truthy!"); // this is unexpected, better to avoid 
  }
  if(arr.length === 0){
    console.log("But length is 0"); // this is the correct behaviour so every time use this
  }

  // Example 2: Negative indices don't work for access, no shortcut evertime
  let numbers = [1,2,3,4,5];
  console.log(numbers[-1]); // undefined (not last element as we expected)
  console.log(numbers[numbers.length - 1]);

  // Example 3: Sort without compare function
  let nums = [1, 2, 10, 20, 3, 30];
  nums.sort();
  console.log(nums); // [1, 10, 2, 20, 3, 30] (sorted as strings)

  // Example 4: Modifying array during iteration
  let items = [1,2,3,4,5];
  // Be careful when modifying array you're iterating over
  items.pop();
  items.pop();
  console.log(items); // [1,2,3]

  // Example 5: Array with holes
  let sparse = [1,,,4];
  console.log(sparse.length); // 4
  console.log(sparse[1]); // undefined
  console.log(sparse[2]); // undefined
}

// Practical array applications
{
  // Example 1: Shopping cart
  let cart = [];
  cart.push("Laptop");
  cart.push("Mouse");
  cart.push("Keyboard");
  console.log("Cart items: ", cart.length); // "Cart items: 3"
  console.log(cart.join(", ")); // "Laptop, Mouse, Keyboard"

  // Example 2: Playlist management
  let playlist = ["Song1", "Song2", "Song3"];
  console.log("Now playing: ", playlist[0]);
  let played = playlist.shift();
  console.log("played: ", played);
  console.log("Remaining: ", playlist);

  // Example 3: High score tracking
  let scores = [150, 200, 180, 220, 190];
  scores.sort((a, b) => b - a);
  console.log("sorted scores are: ", scores); // [220, 200, 190, 180, 150]
  console.log("High score is: ", scores[0]); // 220
  console.log("Top 3 are: ", scores.slice(0,3)); // [220, 200, 190]

  // Example 4: Task list
  let tasks = ["Buy groceries", "Clean room", "Study JavaScript"];
  console.log("Total tasks: ", tasks.length);
  // user want to mark "Clean room" as completed
  let complete = tasks.splice(1,1);
  console.log("Completed: ", complete[0]);
  console.log("Remaining tasks: ", tasks);

  // Example 5: Contact list
  let contacts = [];
  contacts.push("Alice: 123456779");
  contacts.push("Bob: 23432435");
  contacts.push("Ramu kaka: 324343455")
  // suppose user gives task to find bob's contact
  let index = contacts.indexOf("Bob: 23432435");
  let found = contacts[index];
  if (found) {
    console.log("contact found: ", found);
  } else {
    console.log("contact did not exists")
  }
}