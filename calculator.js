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
    if (operator === "+"){
        return add(numberX, numberY);
    }
    else if (operator === "-"){
        return subtract(numberX, numberY);
    }
    else if (operator === "*"){
        return multiply(numberX, numberY);
    }
    else if (operator === "/"){
        return divide(numberX, numberY);
    }
}