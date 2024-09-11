//  function practice

// Normal function declaration 

// function sum(a,b){
//     return a+b;
// }

// // function call 
// console.log(sum(1,3));



// You can also declare the function using the assignment or function assignment
// Function assignment is of two types -- 1. Named function assignment 2. Anonymous function assignment 

// Named function assignment 
// let named = function simpleInterest(p,r,y){
//     return p*r*y/100;
// }

// console.log(named(10,20,30));// remeber that we cannot the function using the simpleInterest(10,20,30) because we are assigning the function to new variable.


// Anonymous function Assignment

// let result = function(a,b){
//     return a*b;
// }
// console.log(result(10,49));


// Function  as the object passing in the argument in the function declaration 

// function sum() {    // if we even pass the i/p argument it will givve the same result and one thing to note that it is not going to use that i/p argument that u have given as it is not using that variable in the function body
//     let total = 0;
//     for (let value of arguments) {
//         total = total + value;
//     }
//      return total;
// }
// console.log(sum(20, 150));


// The rest operator (...) in JavaScript is used to handle an indefinite number of arguments as an array within a function. It allows you to pass multiple values into a function, without needing to explicitly define the number of parameters the function accepts. Essentially, it "collects" all remaining arguments into an array.


// function sum(...args){
//     return (args.reduce((a,b) => a+b)); 
// }
// console.log(sum(1,2,3,4,56,7,8));       


// Default parameters in JavaScript allow you to specify a default value for a function parameter in case it is not provided when the function is called.


// function defaultParameter(a,b,c){
//     return a+b+c/3;
// }

// console.log(defaultParameter(1,2)); // if we don't provide the same argument as we specified during the function declaration then it will give the result as not a number(NaN). so, to avoid getting the error if the user gave less argument or number we will provide our own default parameter which will be given to result as we do not provide all the parameter



// function defaultParameter(a,b=2,c=3){  // we have provided the default parameter to the b and c and one thing to note that once we start giving variable the defualt value then all the variables after that must be initailized to some default value or it will give the error.
//     return a+b+c/3;
// }

// console.log(defaultParameter(1,2));  


// Getter and Setter function 
// Getter -- Getter is used to access the properties.
// Setter -- Setter is used to change or mutate the update.


// let person = {
//     firstName  : "Kush",
//     middleName : "Kumar",             // Here in this example i am able to access the object value but not able to update the fullname son access and update or modify the object value just use get and set properties of object.
//     lastName : "Singh"              
// }

// console.log(`${person.firstName} ${person.middleName} ${person.lastName}`);



// Real example of getter and setter properties in accessing the object value
// let person = {
//     firstName : "Kush",
//     middleName : "Kumar",
//     lastName : "Singh",
//     get fullName(){
//       return (`${person.firstName} ${person.middleName} ${person.lastName}`)  
//     },
//     set fullName(value){
//         let parts = value.split(' ');
//         this.firstName = parts[0];
//         this.middleName = parts[1];
//         this.lastName = parts[2];
//     }

// }

// person.fullName = "Vijay Dhinanath Chouhan";
// console.log(person.fullName);


// Javascript Errors --- try,catch,throw and finally

// let students = {
//     firstName : "Kush",
//     middleName : "Kumar",
//     lastName : "Singh",
//     Marks : "84",
//     grade : "A",
//     get fullDetails(){
//         return (`${students.firstName} ${students.middleName} ${students.lastName} ${students.Marks} ${students.grade}`)
//     },
//     set fullDetails(value){
//         if(typeof value !== String){
//             throw new Error(" The Things that you are doing is Straight Evil.");  // throw keyword is used to show or print the custom error 
//         }
//         let parts = value.split(' ');
//         this.firstName = parts[0];
//         this.middleName = parts[1];
//         this.lastName = parts[2];
//         this.Marks = parts[3];
//         this.grade = parts[4];
//     }

// }
// try{     // try block is used to try to run the block of codes 
    
// students.fullDetails = "Vikash gupta madarchod 67 C";    

// }

// catch (e){     // catch block is used to catch or print the block of code and print the result 
    
//     alert(e);
// }

// console.log(students.fullDetails);


// scope 


// for (let i=0; i<=10; i++){
//       let sum =0;
//       sum += i;
// }
// console.log(sum);    // This will give the error as the let variable keyword is accesible only inside the loops code block



// var sum = 0;
// for (var i=1; i<=10;i++){
//  sum = sum + i;
// }
// console.log(sum); // This line will not give any error as the var keyword is used to print the sum and var is accessible throuhout the file.



// if(true){
//     const a=5;
// }
// const a=10;
// console.log(a,"No Error Brother!") // No error because the let is accessible only inside the if statement and we are giving a =10 for file as both do not collide with each other.

// function sum(a,b){
//     const sum1 = a+b;
//     return sum1;
// }
// const sum1 = 10000;
// console.log(sum(1,3)) // No error here as the  function code block sum1 and sum1 outside the function has different scope .


let arr = new Array(10,20,30,40,50);
let result = arr.reduce((accumulator,nextValue)=> accumulator+nextValue,0);
console.log(result);


