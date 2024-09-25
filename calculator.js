// Main variables

let x;
let y;
let operator;
let displayValue = 0;

// Simple math functions

function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

// Operate function

function operate(numberX, numberY, operator){
    let result;
    if (operator === "+"){
        result = add(numberX, numberY);
    }
    else if (operator === "-"){
        result = subtract(numberX, numberY);
    }
    else if (operator === "*"){
        result = multiply(numberX, numberY);
    }
    else if (operator === "/"){
        if (numberY === 0){
            result = 0;
        }
        else {
            result = divide(numberX, numberY);    
        }
    }
    return result;
}

// Event listeners for numbers keys

const input = document.querySelector("#input")
const one = document.querySelector(".one");

one.addEventListener("click", (event) => {
    populate(1);
});
const two = document.querySelector(".two");
two.addEventListener("click", (event) => {
    populate(2);
});
const three = document.querySelector(".three");
three.addEventListener("click", (event) => {
    populate(3);
});
const four = document.querySelector(".four");
four.addEventListener("click", (event) => {
    populate(4);
});
const five = document.querySelector(".five");
five.addEventListener("click", (event) => {
    populate(5);
});
const six = document.querySelector(".six");
six.addEventListener("click", (event) => {
    populate(6);
});
const seven = document.querySelector(".seven");
seven.addEventListener("click", (event) => {
    populate(7);
});
const eight = document.querySelector(".eight");
eight.addEventListener("click", (event) => {
    populate(8);
});
const nine = document.querySelector(".nine");
nine.addEventListener("click", (event) => {
    populate(9);
});
const zero = document.querySelector(".zero");
zero.addEventListener("click", (event) => {
    populate(0);
});

// Event listeners for other keys 

const clear = document.querySelector("#clear");
clear.addEventListener("click", (event) => {
    input.value = "";
    displayValue = 0;
    x = 0;
    y = 0;
});

const divideButton = document.querySelector("#divide");
divideButton.addEventListener("click", (event) => {
    input.value = "";
    x = displayValue;
    operator = "/";
});

const multiplyButton = document.querySelector("#multiply");
multiplyButton.addEventListener("click", (event) => {
    input.value = "";
    x = displayValue;
    operator = "*";
});

const subtractButton = document.querySelector("#subtract");
subtractButton.addEventListener("click", (event) => {
    input.value = "";
    x = displayValue;
    operator = "-";
})

const addButton = document.querySelector("#add");
addButton.addEventListener("click", (event) => {
    input.value = "";
    x = displayValue;
    operator = "+";
})

const point = document.querySelector("#point");
point.addEventListener("click", (event) => {
    populate(".");
})

const equals = document.querySelector("#equals");
equals.addEventListener("click", (event) => {
    input.value = "";
    y = +displayValue;
    result = operate(x, y, operator);
    
    if (isNaN(result)){
        return input.value = "";
        displayValue = "";
    }
    
    input.value = `${Math.round(result * 10) / 10}`;
    displayValue = result;
})

// Function to populate and store value 

function populate(val){
    input.value += `${val}`;
    displayValue = input.value * 1;
}
