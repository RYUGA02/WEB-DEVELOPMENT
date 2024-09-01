// const variable type in javscript

var a = 2;
var b = 3;

// console.log(a+b);


var a = 30;
var b = 50;
console.log(a + b);  //this will update the value of a and b and will print the new value

// Primary datatypes

// Number
let number1 = 34;
let number2 = -34;
console.log(number1 - number2, typeof number1, typeof number2);

// string
let string1 = "Kush";
let string2 = "coding";
console.log(string1 + string2, typeof string1, typeof string2);

// Boolean
let x = true;
let y = false;
console.log(x, y, typeof x, typeof y);

// BigInt
let m = BigInt("123456789012345678901234567890");
console.log(m, typeof m);

// Undefined
let name1;
console.log(typeof name1);

// Null
let number = null;
console.log("Type of number is:", typeof number);

//symbol
const sym1 = Symbol();
const sym2 = Symbol("foo");
const sym3 = Symbol("foo");
console.log(sym1, sym2, sym3, typeof sym1, typeof sym2, typeof sym3);





// let variable in javascript

// let x=56;
// let y=30;
// console.log(x+y);

//what happens when same identifiers are used with different variable in Javascript

// let a=30;
// let b=20;
// console.log(a+b);  gives error note it because we have used the same identifiers for var and let


{
    let a = 50;

}
console.log(a); //it will print the var a identifier value which is 30 after updation from 2. as it is a global variable while let is local variable.


//Object in Javascript (non-primitive variable)

let student1 = {
    "name": "kush",
    "phone number": "6265591764",
    "marks": "95"
}

let student2 = {
    "name": "shubham",
    "phone number": "8959623778",
    "marks": "98"
}

let student3 = {
    "name": "zeeshan",
    "phone number": "8815754529",
    "marks": "90"
}

let student4 = {
    "name": "samarth",
    "phone number": "7470475729",
    "marks": "94"
}

let student5 = {
    "name": "shahil",
    "phone number": "9736223444",
    "marks": "98"
}

let student6 = {
    "name": "laden",
    "phone number": "9039311575",
    "marks": "99"
}

console.log(student1, student2, student3, student4, student5, student6, typeof student1, typeof student2, typeof student3, typeof student4, typeof student5, typeof student6);


//  Creating a variable of type string and adding a number to see what happens!
let stringname = "kush";
let k = 6265591764;
console.log(stringname + k,typeof stringname);

// creating a constant object and trying to change the number 
const checking = {
    "phone number" : "6265591763",
    "phone number" : "6265591764"
}
console.log(checking);


