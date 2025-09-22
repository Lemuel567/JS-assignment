// ques6.js

const readline = require("readline");

// Create interface for input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask the user for input
rl.question("Enter numbers separated by spaces: ", (input) => {
  // Convert input string to array of numbers
  const numbers = input.split(" ").map(Number);

  // Function to find second largest
  function secondLargest(arr) {
    if (arr.length < 2) {
      return "Not enough numbers.";
    }

    let max = -Infinity;
    let second = -Infinity;

    for (let num of arr) {
      if (num > max) {
        second = max;
        max = num;
      } else if (num > second && num < max) {
        second = num;
      }
    }

    return second === -Infinity ? "No second largest number" : second;
  }

  // Call the function and print result
  const result = secondLargest(numbers);
  console.log("Second largest number is:", result);

  // Close the input
  rl.close();
});
