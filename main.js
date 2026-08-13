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
    logEntry.textContent = args.map(arg =>
        typeof arg === 'object' && arg !== null
            ? JSON.stringify(arg, null, 2)
            : String(arg)
    ).join(' ');
    logEntry.style.padding = '8px 12px';
    logEntry.style.marginBottom = '10px';
    logEntry.style.borderRadius = '4px';
    logEntry.style.color = '#ff6b6b'; // Red for newest
    logEntry.style.backgroundColor = '#2a1a1a';
    logEntry.style.border = '1px solid #ff5252';
    logEntry.style.borderLeft = '3px solid #ff5252';
    logEntry.style.whiteSpace = 'pre-wrap'; // keep JSON formatting

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

//console.log("----------------User Input----------------");
// alert("ALERT");
// let myBool = confirm("ok is true \n cancel is false")
// console.log("you chose: ", myBool)
// let myName1 = prompt("pleasne enter your name");

 //myName1 ?

//console.log("Your chosen name is: ", myName1.trim())
  //   :
    // console.log("you did not enter a name.");

console.log("----------------Loops----------------");

let myNumber = 0;
console.log("while loop example:")
while (myNumber <= 50) {
    myNumber += 10;
    console.log(myNumber);
}

console.log("do while loop example: ")
do {
    myNumber += 10;
    console.log(myNumber);
} while (myNumber <= 100)

console.log("For loop example: ")
for (let i = 0; i <= 10;) {
    console.log(i);
    if (i === 5) break;
    i++;
}

console.log("Continue example: ")
for (let i = 0; i <= 5; i++) {
    if (i === 3) continue;  // skips 3
    console.log(i);  // prints 0, 1, 2, 4, 5
}

console.log("----------------Functions----------------");

//Function DEclaration Syntax:
function sum(num1, num2) {

    if (num2 === undefined) {
        return num1 + num1;
    }
    console.log(num1);
    console.log(num2);
    return num1 + num2;
}

const getUserNameFromEmail = (email) => {
    return email.slice(0, email.indexOf('@'));

}


const toProperCase = (names) =>
    names.charAt(0).toUpperCase() + names.slice(1).toLowerCase();


console.log(sum(4, 2));
console.log(getUserNameFromEmail("miguel@gmail.com"))
console.log(toProperCase("miGuel"))

console.log("----------------Scope - var, let, const----------------");

//global scope
var x = 1;
//let y = 2;
const z = 3;

// local scope
{
    let y = 4;
}

//local scope
function myFunc() {
    const z = 5;
    // local scope
    {
        let y = 4;
    }

}

console.log(x);

console.log("----------------Arrays----------------");

const myArray = [];

myArray[0] = "Mike";
myArray[1] = 10000;
myArray[2] = false;

console.log(myArray);

console.log(myArray.length);

console.log(myArray[myArray.length - 1]);//last position in the array

console.log(myArray[0]);

myArray.push("school");// adds to the back of  array
console.log(myArray);

const lastItem = myArray.pop();// removes the last item
console.log(lastItem);

myArray.unshift(42);// adds to the front
console.log(myArray)

myArray.shift();// remnove from the front
console.log(myArray)
//when indexes are removed index values change

delete myArray[2]//remove from middle
console.log(myArray)

myArray.push(1, 2, 3, 4, 5, 6)
myArray.splice(2, 1)
console.log(myArray)

const newArray = myArray.slice(2, 6);
console.log(newArray);
const reverseArray = newArray.reverse();
console.log(reverseArray);

const concatArray = newArray.concat(reverseArray);
concatArray.splice(3, 0, "---");
// returns a new array and does nnot modify the foriginal
console.log(concatArray);


//spread operator
// Arrays
const myArrayA = ["A", "B", "C"];
const myArrayB = ["D", "E", "F"];

const array1 = [myArrayA, myArrayB];

console.log(array1);

const array2 = [...myArrayA, ...myArrayB];

console.log(array2);

const row1 = [1, 2, 3, 4, 5, 6];
const row2 = [1, 2, 3, 4, 5, 6];
const row3 = [1, 2, 3, 4, 5, 6];

const grid = [row1, row2, row3];

console.log(grid[2][4])


// Shelves (1D)
const shelfA = ["apples", "bananas"];
const shelfB = ["milk", "eggs"];

// Aisle = array of shelves (2D)
const aisle = [shelfA, shelfB];
console.log(aisle[0][1]);      // "bananas"

// Store = array of aisles (3D)
const store = [aisle];
console.log(store[0][1][0]);   // "milk"

console.log("----------------Objects----------------");

//object literal|KEY : VALUE
//property  key + value but also used loosley
const myObj = { name: "Mike" };

const anotherObj = {
    alive: true,
    answer: 19,
    hobbies: ["eat", "sleep", "gym", "code", "work"],
    beverage: {
        morning: "pre workout",
        afternoon: "iced tea"
    },
    action: function () {
        return `hello nigga, are you ready for ${this.beverage.morning}`;
    }
}

//Dot notation(to read/access  poperty)
console.log("Name:",myObj.name);

console.log("Hobbies",anotherObj["hobbies"]);
console.log("Morning beverage: ",anotherObj.beverage.morning);
console.log("action:",anotherObj.action());


const vehicle = {
    wheels: 4,
    engine: function () {
        return "vroom"
    }

}

const truck = Object.create(vehicle);
console.log(truck)
truck.doors = 2;
console.log(truck);
console.log(truck.wheels);// Inheritance
console.log(truck.engine());
const car =  Object.create(vehicle);
car.doors = 4;
car.engine = function (){
    return "Whoooosh!";
};
console.log(car.engine());
console.log(car.wheels);

const tesla = Object.create(car);
console.log(tesla.wheels);
tesla.engine = function(){
    return "zzzzzzzzz..";
};
console.log(tesla.engine());

const band = {
    vocals:"Robert Plant",
    guitar: "Jimmy Page",
    bass: "Jon Paul Jones",
    drums: "John Bonham"
};


delete band.drums;
console.log(band.hasOwnProperty("drums")) 

console.log(Object.keys(band))
console.log(Object.values(band))

for(let job in band){
    console.log(`On ${job}, its ${band[job]}`);
}

//destructuring objects

const {guitar:myVariable, bass:myBass } = band;
//myvariable is being defined as guitar value from band
console.log(myVariable);
console.log(myBass);

//another way to do this is
console.log("method 2 up above:");
const {guitar, bass, vocals}= band;
console.log(guitar);
console.log(bass);
console.log(vocals);

//to pull a specific property from an object
//destructuring within function parameter
function sings({vocals}){//right here it is destructred
return  `${vocals} sings` 
};
console.log(sings(band));

console.log("----------------Classes----------------");

//this is a class
class Pizza{
    
    //properties are created in the constructor
    constructor (pizzaType, pizzaSize)//code runs when create an object with this class
    
    {
      
        //values are passed to become properties(key value pairs)
        this.type = pizzaType
        this.size = pizzaSize
        this.crust = "original"
        this.toppings  = []
    }
    getToppings()
    {
        return this.toppings
    }

    setToppings(toppings){
       this.toppings.push(toppings)
    }

    //is called when you access this propertey "myPizza.pizzaCrust"
    //this is an example but it should do more work than just return it
    //all only if you use the get keyword method
    getCrust(){
        return this.crust;
    }

    //is called when you use asign operator "=" and passes what you assign as the new value
    //this is an example but it should do more work than just return it//all only if you use the get keyword method
    setCrust(pizzaCrust){
        this.crust= pizzaCrust;
    }

    // method that uses this to access object instance
    bake(){
        console.log(
            `Baking a ${this.size} ${this.type} ${this.toppings} ${this.crust} crust pizza` 
        )
    } 
}

// this line creates a new empty object, but then passes 2 values to be ran through the constructor.
const myPizza = new Pizza("pepperoni", "small");



myPizza.setCrust("niggatron")
myPizza.setToppings ("chitlins")

//getter is not used here. because propertey is accessed directly
myPizza.bake();

console.log("the crust is ", myPizza.getCrust())
console.log("the topping is ", myPizza.getToppings())

// Getter would be ran here
//console.log(myPizza.pizzaCrust)


//INHERITANCE BELLOW

//child class inheriting from parent Pizza class
class SpecialtyPizza extends Pizza {
    constructor(pizzaType,pizzaSize){

        //the super calls the constructor from pizza class
        super(pizzaType, pizzaSize)
       }
       slice(){
        console.log (`Our ${this.type} ${this.size} pizza has 8 slices.`)
       }
}
const mySpecialty = new SpecialtyPizza("The works","medium")
mySpecialty.slice()


//Factory Function
function pizzaFactory (pizzaSize){
    const crust ="original"
    const size = pizzaSize

    return{
        bake:() => console.log(`baking a ${size} ${crust} crust pizza`)
    };
}
const myPizzaFactory = pizzaFactory("small");
myPizzaFactory.bake();

console.log("----------------JSON----------------");

const myJsonObj = {
    name: "Dave",
    hobbies: ["eat", "sleep", "code"],
    hello: function () {
        console.log("Hello!");
    }
};

console.log("logging object directly: ",myJsonObj);
console.log("name:",myJsonObj.name);
myJsonObj.hello();
console.log("type:",typeof myJsonObj);

const sendJson = JSON.stringify(myJsonObj);// converst object to json
console.log(sendJson)//json string format actualy displayable
console.log("type: ", typeof sendJson)//type is now string as shown in log
console.log(sendJson.name)// object not accessable anymore

const reciveJSON = JSON.parse(sendJson);//json is recieved and turned in to an object
console.log("object directly logged",reciveJSON);//undefined in disply log but in real log it is object

console.log("----------------Handling Errors----------------");
//JS strict mode. enforces certain js rules
"use strict";

//this shit dont work you need to declare variable tgype
//this is a refrence error when you remove const
 const variable ="mike"; 
console.log(variable)

//a syntax error is not able to be caught and fixed 

class customError {
    constructor(message) {
        this.name = "custom type";
        this.message = message;
        this.stack = `${this.name}: ${this.message}`;
    }
}

const makeError = () => {
    //run the risky code inside the try{}
    try{
        // instead of relying on a TypeError from reassigning const:
        // throw creates the error on purpose
        throw new customError("custom error throw");

    }
    //when the risky code fails from try, an error object is thrown bellow
    // capture with whatever variable name you like
    catch(error) { 
        
        //.stack propertey- full trace, tells you error type,explanation, line and function, and file
        console.warn(error.stack);
        
    }
    finally{
        console.log("finaly logs at the end no matter what")
    }
};
makeError();

console.log("----------------DOM----------------");

