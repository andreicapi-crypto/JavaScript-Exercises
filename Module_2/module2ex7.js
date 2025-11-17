function diceroll(sides) {
    return Math.floor(Math.random() * sides) + 1;
}
const resultsList = document.getElementById("results");
let sides = parseInt(prompt("How many sides should the dice have?"));
let roll = 0;
do {
    roll = diceroll(sides);
    const li = document.createElement("li");
    li.textContent = "Rolled: " + roll;
    resultsList.appendChild(li);
} while (roll !== sides);
