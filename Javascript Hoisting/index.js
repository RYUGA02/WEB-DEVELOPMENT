// Hoisting -- Hoisting  is the process of moving the declaration to the top of the scope.Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution. This means you can use functions and variables before they are declared in your code.

// Hoisting has many types
// 1. Variable Hoisting (Supports only var keyword)
// 2. Function Hoisting
// 3. class hoisting    -- Not supported 

// 1. variable hoisting example

// console.log(age);   // you are using the age variable before it is declared and initialized.
//                     // Here what happens is that var age; is shifted to the top of the file or scope  
//                     // hence you will does not see any reference error related to variable hoisting 
//                     //hence your result will be undefined (because var age; and you are printing age which do not have any value)
// var age = 29;  

// case 2 : let variable hoisting

// console.log(rollNo);          // will give reference error as it does not support variable hoisting
// let rollNo = 17;


// case 3 : const variable hoisting

// console.log(className);          // will give reference error as it does not support variable hoisting
// const className = 12;


// 2. function Hoisting

// function hoisting has two scenarios --
// 1. when function is declared normally 
// 2. when function is initialized with variable (also called function expression)

// case-1 : when function is declared normally -- then function hoisting works!

// hello();                    // here you are calling the function first before declaring it.hence called function hoisting.
// function hello(){           // it will do same work as normal because function body will be shifted to top of scope
//     console.log("Hi! how are you ?");
// }


// case-2 : when function is initialized with variable ( also called function expression).

// result();             // will give reference error as function hoisting does not work with function expression.
// let result = function greet(){
//     console.log("Hello! Gamers.");
// }


// 3. class hoisting example

// let object = new human;      // it will give reference error as class hoisting is also not supported
// class human{

// }


// Summary ---- So, Hoisting kuch nahi hota bas agar hum kisi bhi variable yaa function ko declare aur initialized hone se phele hi agar hum istemal kar lete hain toh wo kaam karega agar hum var keyword se aisa karte hain lekin uska answer hamesha undefined aayega aur rahi baat let and const variable ki toh usme hoisting kaam nahi karti hain. Agar hum normal function ko call karte hain phele without declaring and initializing its body toh bhi wo same work karegi kyunki function hoisting me pura ka pura function ka body as it is top of the code yaa scope pe rakh diya jata hai before code execution.Ab hum kare baat class hoisting ki toh wo support nahi karti apne aap ko js me.