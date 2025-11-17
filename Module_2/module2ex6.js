function diceroll() {
    return Math.floor(Math.random() * 6) + 1;
}
const resultsList = document.getElementById("results");
let roll = 0;
do {
    roll = diceroll();
    const li = document.createElement("li");
    li.textContent = "Rolled: " + roll;
    resultsList.appendChild(li);
} while (roll !== 6);