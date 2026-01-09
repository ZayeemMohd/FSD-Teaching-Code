// Section 1: Array slice() method
{
  //  Question 1: create an array numbers = [10, 20, 30, 40, 50, 60, 70]. Then:
  //  Use slice() to get elements from index 2 to 5 (not including 5)
  //  Use slice() to get the last 3 elements
  //  Store both results in separate variables and print them
  //  Verify that the original array is unchanged

  // Solution 1:
  let numbers = [10, 20, 30, 40, 50, 60, 70];
  let getElems = numbers.slice(2, 5);
  let lastThree = numbers.slice(-3);
  console.log("get elements from index 2 to 5: ", getElems); // [30, 40, 50]
  console.log("Last three elements: ", lastThree); // [50, 60, 70]
  console.log("original array", numbers); // [10, 20 ,30, 40, 50, 60, 70]

  // Question 2: You have a playlist: songs = ["Song1", "Song2", "Song3", "Song4", "Song5", "Song6"] . Then:
  // Use slice() to create a "morning playlist" with the first 3 songs
  // Use slice() to create an "evening playlist" with the last 2 songs
  // Use slice() with negative index to get all songs except the first one
  // Print all three playlists

  // Solution 2:
  let songs = ["Song1", "Song2", "Song3", "Song4", "Song5", "Song6"];
  let morningPlaylist = songs.slice(0, 3);
  let eveningPlaylist = songs.slice(-2);
  let allSongsExpFirst = songs.slice(-5);
  console.log("morning playlist: ", morningPlaylist);
  console.log("evening playlist: ", eveningPlaylist);
  console.log("all songs except first: ", allSongsExpFirst);
}

// Section 2: Advanced splice() usage
{
  // Question 1: Create an array colors = ["red", "green", "blue", "yellow", "purple", "orange"] . Then:
  // Use splice() to remove "blue" and "yellow" (2 elements starting at index 2)
  // Store the removed elements in a variable
  // Print both the removed elements and the modified array

  // Solution 1:
  let colors = ["red", "green", "blue", "yellow", "purple", "orange"];
  let removed = colors.splice(0, 2);
  console.log("removed elements are: ", removed); // ["red", "green"]
  console.log("original array is: ", colors); // ["blue", "yellow", "purple", "orange"]

  // Question 2: You have an array numbers = [1, 2, 3, 7, 8, 9] . Use splice() to:
  // Insert 4, 5, and 6 at index 3 (without deleting anything)
  // Print the corrected array
  // Verify that the array now contains [1, 2, 3, 4, 5, 6, 7, 8, 9]

  // Solution 2:
  let numbers = [1, 2, 3, 7, 8, 9];
  numbers.splice(3, 0, 4, 5, 6);
  console.log("updated array is: ", numbers);
}

// Section 3: Array sort() method
{
  // Question 1: Create an array fruits = ["banana", "apple", "mango", "cherry", "orange"] . Then:
  // Sort the array alphabetically
  // Print the sorted array
  // Try creating another array with numbers nums = [5, 10, 1, 100, 25] and sort it
  // Notice the result and print it (observe how numbers are sorted as strings)

  // Solution 1:
  let fruits = ["banana", "apple", "mango", "cherry", "orange"];
  fruits.sort();
  console.log("sorted array: ", fruits);
  let nums = [5, 10, 1, 100, 25];
  nums.sort();
  console.log("sorted array: ", nums); // [1, 10, 100, 25, 5]

  // Question 2: Create an array scores = [78, 92, 85, 88, 95, 73] . Then:
  // Sort the array in ascending order using sort((a, b) => a - b)
  // Print the sorted scores
  // Now sort the same array in descending order using sort((a, b) => b - a)
  // Print the highest and lowest scores

  // Solution 2:
  let scores = [78, 92, 85, 88, 95, 73];
  scores.sort((a, b) => a - b);
  console.log("sorted score: ", scores);
  let CopysortedArr = scores.sort((a, b) => b - a);
  console.log("sorted in descending: ", scores);
  console.log("removed from copied array", CopysortedArr.pop());
  console.log("Copy using sort", CopysortedArr);
  console.log("original array scores", scores);
  // it is also concludes that .sort doesn't create a new array, it performs opearations on original array
}

// Section 4: Array join() method
{
    // Question 1: Create an array words = ["JavaScript", "is", "awesome"] . Then:
    // Use join(" ") to create a sentence with spaces
    // Use join("-") to create a hyphenated string
    // Use join("") to concatenate all words without spaces
    // Print all three results

    // Solution 1: 
    let words = ["JavaScript", "is", "awesome"];
    let sentence = words.join(" ");
    let sentenceHyphen = words.join("-");
    let sentenceWS = words.join("");
    console.log(sentence)
    console.log(sentenceHyphen)
    console.log(sentenceWS)

    // Question 2: You have a date stored as dateArray = ["2024", "12", "25"] . Then:
    // Use join("/") to create a date string in format: "2024/12/25"
    // Use join("-") to create a date string in format: "2024-12-25"
    // Create a time array time = ["14", "30", "00"] and use join(":") to format it
    // Print all formatted strings

    // Solution 2: 
    let dateArray = ["2024", "12", "25"];
    let timeArray = ["14", "30", "00"];
    let dateWithSlash = dateArray.join("/");
    let dateWithHyphen = dateArray.join("-");
    let timeWithSemicolon = timeArray.join(":");
    console.log(dateWithSlash, dateWithHyphen, timeWithSemicolon);

}

// Section 5: Array toString() method
{
    // Question 1: Create an array numbers = [1, 2, 3, 4, 5] . Then:
    // Use toString() to convert it to a string
    // Print the result and check its type using typeof
    // Compare the result with join() without arguments
    // Explain the difference in a comment

    // Solution 1: 
    let numbers = [1, 2, 3, 4, 5];
    let strNumbers = numbers.toString();
    console.log("strNumbers: ", strNumbers, "type: ", typeof strNumbers);
    let joinNumbers = numbers.join();
    console.log("joinNumbers: ", joinNumbers, "type: ", typeof joinNumbers)
}