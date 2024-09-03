// Faulty Calculator

// This calculator gives output as :

/*       + --->  -
         * --->  +
         - --->  /
         / ---> **

  only 10% of the times
*/
let A = Math.random();
const faulty1 = (a, b) => {
    if (A < 0.1) {
        return a - b;
    }
    else {
        return a + b;
    }
}

let addition = faulty1(2, 3);
console.log("The addition of two numbers is:", addition);



const faulty2 = (a, b) => {
    if (A < 0.1) {
        return a / b;
    }
    else {
        return a - b;
    }
}

let substraction = faulty2(9, 3);
console.log("The substraction of two numbers is:", substraction);

const faulty3 = (a, b) => {
    if (A < 0.1) {
        return a + b;
    }
    else {
        return a * b;
    }
}
let Multiplication = faulty3(3, 4);
console.log("The multiplication of the two numbers is:", Multiplication);



const faulty4 = (a, b) => {
    if (A < 0.1) {
        return a ** b;
    }
    else {
        return a / b;
    }
}
let Division = faulty4(3, 4);
console.log("The multiplication of the two numbers is:", Division);