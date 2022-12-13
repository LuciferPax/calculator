// Get input from the user
// Load the readline module
const readline = require("readline");

// Create a readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Create an empty array to store the input values
let inputArray = [];

// Use a while loop to continuously get input from the console
while (true) {
  // Use the rl.question() method to get input from the user
  rl.question("Enter a number or operator (+, -, *, /): ", (input) => {
    // Check if the input is one of the specified operators
    if (input === "+" || input === "-" || input === "*" || input === "/") {
      // If it is an operator, perform the operations on the inputArray
      let result = 0;
      if (input === "+") {
        result = inputArray.reduce((a, b) => a + b);
      } else if (input === "-") {
        result = inputArray.reduce((a, b) => a - b);
      } else if (input === "*") {
        result = inputArray.reduce((a, b) => a * b);
      } else if (input === "/") {
        result = inputArray.reduce((a, b) => a / b);
      }

      // Print the result and clear the inputArray
      console.log(result);
      inputArray = [];
    } else {
      // If it is not an operator, add it to the inputArray as a number
      inputArray.push(Number(input));
    }
  });
}
