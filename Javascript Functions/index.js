// Normal Function Creation

//Function Declaration

function kush(name) {
    console.log("my name is :", name);
}

// Function Invocation or Function Calling

kush("vikash");






// function to create a sum of two numbers

function sum(a, b) {
    console.log("The sum is :", a + b);
}

sum(8, 8);





// Returning the caller the value from the function
function sum(a, b, c) {
    return a + b + c;
}

let sumOfThreeDigits = sum(27, 20, 13);
console.log("The sum of three digits is", sumOfThreeDigits);





// Function Expression Example

const Multi = function (k, m) {
    return k * m;
}

let devp = Multi(25, 4);
console.log("The multiplication of 2 number is:", devp);




// Arrow Function Best for Shorthand or For quickly writing the code.

const Exponen = (number1, number2) => {
    return number1 ** number2;
}

let value = Exponen(2, 10);
console.log("The value of Exponential of the two numbers is:", value);





// Function for creating the mean of 5 values

const mean = (num1, num2, num3, num4, num5) => {
    let Mean = (num1 + num2 + num3 + num4 + num5) / 5;
    return Mean;
}

let meanOfFive = mean(10, 20, 30, 40, 50);
console.log("The mean of 5 numbers is:", meanOfFive); // or console.log("The mean of 5 numbers is:",mean(10,20,30,40,50));
