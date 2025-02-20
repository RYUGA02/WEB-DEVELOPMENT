// Variable Scoping -- In Javascript there are 3 types of variable scoping means in which part you access and declare that varibale

// 1. Global Scope
// 2. Block Scope
// 3. Function scope


// 1. Global Scope  ---- In case of let,var and const

// Case -1 -- var
// console.log(cool);   // In this case the result will came out to be undefined because it is initailized before declaring and var keywords hoist the variable declaration  only not entire initailization also on top of the file scope.
// var cool = 100;


// // Case -1 -- let (Temporal Deadzone)
// console.log(party);  // In this case you will see error as it creates the temporal deadzone means you cannot access the varibale before initilizing it first on the top 
// let party = 200;


// Case -1 -- const (Temporal DeadZone)
// console.log(hereWeGo);  // In this case you will see error as it also creates temporal deadzone from line number 21 to 25
// console.log("Hello");
// console.log("la asas sdsk");
// const hereWeGo = 300;

// 2. Block scope ---- In case of let, var and const

// Case -1 -- var
// {
//     var nameFunc = 400;
// }
// console.log(nameFunc); // you will see the result as 400 beacause var is not a block scope that's why you are able to access that variable.

// // Case -2 -- let

// {
//     let gintama = 500;
// }
// console.log(gintama);  // you will see the result as error saying variable is not declared and initialized so how can you access it as gintama is in the bracket meaning that we cannot access outside that curly bracket hence making let as block scope.


// Case -3 -- const

// {
//     const aot = 600;
// }
// console.log(aot);  // you will see the result as error saying variable is not declared and initialized so how can you access it as gintama is in the bracket meaning that we cannot access outside that curly bracket hence making let as block scope.

// 3. Function Scope -- in case of var,let and const

//  case -1 : var
// var  happy = function greet(){
//     console.log("Hello! Fuck You.");
// }
// happy()

// case - 2 : let
// let sad = function meet(){
//     console.log("Hello ! Let's catch up in the evening.")
// }
// sad()

// case -3 : const
const goodBye = function Sayonara(){
    console.log("Sayonara Arigato");
}
goodBye()

// In case of function scope we are able to access all 3 variable (const,var & let).