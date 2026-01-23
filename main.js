// JavaScript Learning Environment
const output = document.getElementById('output');
output.innerHTML = '';

// Override console.log to show on page
const originalLog = console.log;
console.log = function (...args) {
    originalLog.apply(console, args);

    // Reset previous logs to blue
    const allLogs = output.querySelectorAll('div');
    allLogs.forEach(log => {
        log.style.color = '#4a9eff';
        log.style.backgroundColor = '#1a1a1a';
        log.style.border = '1px solid #404040';
        log.style.borderLeft = '3px solid #4a9eff';
    });

    // Create new log entry
    const logEntry = document.createElement('div');
    logEntry.textContent = args.join(' ');
    logEntry.style.padding = '8px 12px';
    logEntry.style.marginBottom = '10px';
    logEntry.style.borderRadius = '4px';
    logEntry.style.color = '#ff6b6b'; // Red for newest
    logEntry.style.backgroundColor = '#2a1a1a';
    logEntry.style.border = '1px solid #ff5252';
    logEntry.style.borderLeft = '3px solid #ff5252';

    // Insert at top
    output.prepend(logEntry);

    // Auto-scroll to top to show newest log
    output.scrollTop = 0;
};






console.log("----------------Strings-----------------");
let myName = "Mike";
console.log(myName.length);
console.log(myName.charAt(1));
console.log(myName.indexOf("a"));
console.log(myName.lastIndexOf("bl"));
console.log(myName.slice(0, 3));
console.log(myName.toUpperCase());
console.log(myName.toLowerCase());
console.log(myName.includes("variable"));
console.log(myName.split("r"));
console.log(myName.replace("variable", "variable2"));

console.log("----------------Numbers----------------");
let num = 10;
console.log(num)
console.log(Number.isInteger(num));
console.log(num.toFixed(3))
console.log(Number.parseInt(num))
console.log(typeof num)
console.log(num.toString())
console.log(Number.isNaN("dh"))

console.log("----------------Math Methods----------------");
console.log(Math.PI)
console.log(Math.trunc(Math.PI))
console.log(Math.round(3.5))
console.log(Math.ceil(num))
console.log(Math.floor(num))
console.log(Math.pow(num, 8))
console.log(Math.min(num, 8, 83))
console.log(Math.max(num, 8))
console.log(Math.floor(Math.random() * 10) + 1)
console.log(Math.floor(Math.random() * 100) + 1)

console.log("----------------Coding Challenge----------------");
console.log("Write code that will return a random letter from your name")
// Write code that will return a random letter from your name
let random_letter = Math.floor(Math.random() * myName.length)
console.log(myName.charAt(random_letter))
console.log("----------------If statments----------------");

let ranNum = Math.floor(Math.random() * 10) + 1
if (ranNum > 5) {
    console.log(`random num '${ranNum}' is greater than 5`)
} else {
    console.log(`random num '${ranNum}' is less than 5`)
}
let score = 69;
let grade;

if (score >= 89) {
    grade = "A"
} else if (score >= 79) {
    grade = "B"
} else if (score >= 69) {
    grade = "c"
}
console.log(grade)

console.log("----------------Rock Paper Scissors----------------");
let player1 = "paper";
let computer = "rock";

if (player1 === computer) {
    console.log("Tie")
}
else if (player1 === "rock") {
    if (computer === "paper") {
        console.log("computer wins")
    }
    else { console.log("player 1 wins") } // player1=rock, computer=scissors
}
else if (player1 === "scissors") {
    if (computer == "paper") {
        console.log("player 1 wins")
    } else { console.log("computer wins") } // player1=scissors, computer=rock
}
else if (player1 === "paper") {
    if (computer === "scissors") {
        console.log("computer wins")
    } else { console.log("player 1 wins") } // player1=paper, computer=rock

}

console.log("----------------Switch Statements----------------");


switch (Math.floor(Math.random() * 3) + 1) {
    case 1: console.log(1);
        break;
    case 2: console.log(2);
        break;
    case 3: console.log(3);
        break;
    default: console.log("No Match")
}
console.log("----------------Switch Statements Rock paper scissors & ternary operator----------------");
//condition ? ifTrue : ifFalse

player1 = "scissors";
computer = "rock";
switch (player1) {
    case computer: console.log("Tie");
        break;
    case "rock":
        computer === "paper" ?
            console.log("Computer wins") :
            console.log("Player 1 wins");
        break;
    case "paper":
        computer === "rock" ?
            console.log("Player 1 wins") :
            console.log("Computer wins");
        break;

    case "scissors": computer === "rock" ?
        console.log("Computer wins") :
        console.log("Player 1 wins");
        break;
}
//chain them example

let yes = "yes"
let no = "no"

no === yes ? console.log("unanimous") :
    no !== yes ? console.log("split decision") :
        console.log("undefined try again");


