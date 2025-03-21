// 1️⃣ Undeclared Variable Error

// What will be the output of the following code?

// "use strict";

// function test() {
//     x = 10;
//     console.log(x);
// }

// test();
// answer -- reference ERROR


// 2️⃣ Read-Only Property Assignment

// What will happen when you run the following code?

// "use strict";

// const obj = Object.freeze({ name: "Alice" });

// obj.name = "Bob"; 
// console.log(obj.name);

// Q: Will "Alice" change to "Bob"? If not, why? How can you handle such cases?
// answer -- No because the object has a read only properties so it cannot change it while "use strict" is used. 


// 3️⃣ Duplicate Function Parameters

// Identify the error in the function below and suggest a fix.

// "use strict";

// function sum(a, a) {  
//     return a + a;
// }

// console.log(sum(5, 10));

// Q: What error does this code produce, and how can you fix it?
// answer -- The function has duplicate parameter which will lead to error called as "Duplicate function Parameters" so to fix that we have to remove a in second parameter to anything charachter other than a
// solution -- 
"use strict"
function sum(a,b){
    return a+b;
}
console.log(sum(10,20))

// 4️⃣ Deleting Variables

// What will happen when you execute the following code?

// "use strict";

// var number = 100;
// delete number;
// console.log(number);

// Q: Why does this code fail? How can you make it work correctly?
// answer -- we cannot delete any variable during safe mode so this code will log error

// 5️⃣ this Behavior in Strict Mode

// What will be printed when the following function is called?

"use strict";

function show() {
    console.log(this);
}

show();

// Q: What will this refer to? How is it different from non-strict mode?
// answer -- This function will log error message as this behavior is prohibited in safe mode.