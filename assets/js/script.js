/* Declared constants for the rest of the code */
const buttons = document.querySelectorAll('.controls-area button');
const playerSelection = document.getElementById('playerSelection');
const computerSelection = document.getElementById('computerSelection');  
const result = document.getElementById('result');
const winsSpan = document.getElementById('wins');
const lossesSpan = document.getElementById('losses');

let playerScore = 0;
let computerScore = 0;

/* Function to randomly pick the cmputers choice */
function computerSelect() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}


