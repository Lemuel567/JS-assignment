const readline = require("readline");

// Setup to read input from the terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Sample list of products
const products = [
  { name: "Laptop", price: 1200 },
  { name: "Phone", price: 800 },
  { name: "Tablet", price: 600 }
];

// Function to filter affordable products
function getAffordableProducts(products, budget) {
  return products.filter(product => product.price <= budget);
}

// Ask user for budget
rl.question("Enter your budget: ", function(input) {
  const budget = Number(input); // Convert string to number

  const affordable = getAffordableProducts(products, budget);

  console.log("Affordable Products:");
  affordable.forEach(product => {
    console.log(`- ${product.name}: $${product.price}`);
  });

  rl.close(); // Stop the program
});
