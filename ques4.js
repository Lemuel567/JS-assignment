const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const products = [
  { name: "Laptop", price: 1200 },
  { name: "Phone", price: 800 },
  { name: "Tablet", price: 600 }
];

function getAffordableProducts(products, budget) {
  return products.filter(product => product.price <= budget);
}

rl.question("Enter your budget: ", function(input) {
  const budget = Number(input);
  const affordable = getAffordableProducts(products, budget);

  console.log("Affordable Products:");
  affordable.forEach(product => {
    console.log(`- ${product.name}: $${product.price}`);
  });

  rl.close();
});
