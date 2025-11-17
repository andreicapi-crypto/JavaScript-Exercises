let numbers = new Set();    
let run = true;
while (run) {
    let input = prompt("Enter a number:");
    if (input === null) break;
    let nr = Number(input);
    if (isNaN(nr)) {
        alert("Enter valid number.");
        continue;
    }
    if (numbers.has(nr)) {
        alert("The number " + nr + " has already been given,the program will stop.");
        run = false;
    } else {
        numbers.add(nr);
    }
}
let sorted = Array.from(numbers).sort((a, b) => a - b);
console.log("Numbers are in ascending order:");
console.log(sorted);
