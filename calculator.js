let x;
let y;
let operator;

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
        result = divide(numberX, numberY);
    }
    return result;
}

    const input = document.querySelector("#input")
    const one = document.querySelector(".one");
    one.addEventListener("click", (event) => {
        populate(1);
    })
    const two = document.querySelector(".two");
    two.addEventListener("click", (event) => {
        populate(2);
    })
    const three = document.querySelector(".three");
    three.addEventListener("click", (event) => {
        populate(3);
    })
    const four = document.querySelector(".four");
    four.addEventListener("click", (event) => {
        populate(4);
    })
    const five = document.querySelector(".five");
    five.addEventListener("click", (event) => {
        populate(5);
    })
    const six = document.querySelector(".six");
    six.addEventListener("click", (event) => {
        populate(6);
    })
    const seven = document.querySelector(".seven");
    seven.addEventListener("click", (event) => {
        populate(7);
    })
    const eight = document.querySelector(".eight");
    eight.addEventListener("click", (event) => {
        populate(8);
    })
    const nine = document.querySelector(".nine");
    nine.addEventListener("click", (event) => {
        populate(9);
    })
    const zero = document.querySelector(".zero");
    zero.addEventListener("click", (event) => {
        populate(0);
    })

function populate(val){
    input.value += `${val}`;
}