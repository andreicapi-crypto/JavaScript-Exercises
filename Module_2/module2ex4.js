let numbers = [];

while (true) {
    let input = prompt("Enter a number (0 to stop):");
    let nr = Number(input);

    if (nr === 0) {
        break;
    }

    if (!isNaN(nr)) {
        numbers.push(nr);
    } else {
        console.log("Enter a valid number.");
    }
}         

numbers.sort((a, b) => b - a); 

console.log("From biggest to smallest:");
console.log(numbers);
