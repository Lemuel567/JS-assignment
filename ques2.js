const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter numbers separated by commas: ", (input) => {
    // Convert input string to an array of numbers
    const numbers = input.split(',').map(num => parseInt(num.trim()));

    // Step 1: Double each number
    const doubled = numbers.map(num => num * 2);

    // Step 2: Keep only even numbers
    const evens = doubled.filter(num => num % 2 === 0);

    // Step 3: Sum the remaining numbers
    const sum = evens.reduce((acc, num) => acc + num, 0);

    console.log("Sum of doubled even numbers:", sum);

    rl.close();
});
