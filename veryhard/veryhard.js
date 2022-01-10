let num1 = prompt(`Enter a number`);

let symbol = prompt(`Please enter addition subtraction multiplication or division`);

let num2 = prompt(`Enter another number`);

if(symbol === "+"){
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    console.log(`${num1} + ${num2} equals ${ add (num1 , num2)}`);
}

if(symbol === "-"){
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    console.log(`${num1} - ${num2} equals ${ subtract (num1 , num2)}`);
}

if(symbol === "*"){
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    console.log(`${num1} * ${num2} equals ${ multiply (num1 , num2)}`);
}

if(symbol === "/"){
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    console.log(`${num1} / ${num2} equals ${ divide (num1 , num2)}`);
}

function add (num1, num2){
    return num1 + num2;
}

function subtract (num1 , num2){
    return num1 - num2;
}

function multiply (num1 , num2){
    return num1 * num2;
}

function divide (num1 , num2){
    return num1 / num2;
}