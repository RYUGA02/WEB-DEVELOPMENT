// Arithematic Operators

let a = 9;
let b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);
console.log(++a);
// console.log(--a);
// console.log(a++);
console.log(a--);

// Assignment Operators


let num1 = 5;
let num2 = num1;
console.log(num1);
// num1 += num2;
// console.log(num1);
// num1 -= num2;
// console.log(num1);
// num1 *= num1;
// console.log(num1);
// num1 /= num2;
// console.log(num1);
// num1 %= num1;
// console.log(num1);
// console.log(num1 **= num1);

// Comparison Operators

let number1 = 50;
let number2 = "50";
console.log(number1 == number2);
console.log(number1 != number2);
console.log(number1 > number2);
console.log(number1 < number2);
console.log(number1 >= number2);
console.log(number1 <= number2);
console.log((number1 > number2) ? ("you can die!") : ("you cannot die")); // Ternary Operator
console.log(number1 === number2); // false
console.log(number1 == number2); //true

// Logical Operator

let num3 = true;
let num4 = false;
console.log(num3 && num4);
console.log(num3 || num4);
console.log(!num3,!num4);

// Bitwise Operator

let k = 2;
let p = 8;
console.log(k&p);
console.log(k|p);
console.log(k ^ p);
console.log(~p);
console.log(k<<2);
console.log(p>>2);

// Ternary Operator
let speed = 90;
console.log((speed >= 90) ? ("you are Fast Bro Slow it Down!") : ("You are slow like a Turtle!"));

// upper example is same as writing if-else conditional statement like --
// if (speed >= 90){
// console.log ("you are Fast Bro Slow it Down!")}
// else{
// console.log("You are slow like a Turtle!")}

// U can call Ternary Operator as a shorthand of the if-else statement.
// Just write (condition) ? ("code to executed if true") : ("code to be executed if condition is false");