const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function capitalizeWords(sentence) {
    const words = sentence.split(" ");
    const capitalized = words.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    });
    return capitalized.join(" ");
}

rl.question("Enter a sentence: ", function(input) {
    const result = capitalizeWords(input);
    console.log("Capitalized:", result);
    rl.close(); // Close the input stream
});
