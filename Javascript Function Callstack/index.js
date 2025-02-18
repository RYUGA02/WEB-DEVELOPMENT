// function call stack ---- The function call stack is a data structure used by JavaScript’s execution context to manage function execution. It follows the Last In, First Out (LIFO) principle, meaning the last function added is the first one to be removed.

//  working of function call-stack
// 1. When a function is invoked, JavaScript pushes it onto the call stack.
// 2. If that function calls another function, the new function is added (pushed) to the top of the stack.
// 3. The function at the top of the stack is always the one currently being executed.
// 4. Once a function completes execution, it is removed (popped) from the stack.
// 5. This continues until the call stack is empty, meaning all functions have completed execution.

// 1. Question
// function first() {
//     console.log("First");
//     second();
//     console.log("First End");
// }
//                                           // predict the output 
// function second() {                                                    // correct answer by me.
//     console.log("Second");
// }

// first();

// 2. Question
// function hello() {
//     console.log("Hello");
//     world();                            // correct answer by me.
// }

// function world() {
//     console.log("World");
// }

// hello();

// // 3. Question
// function a() {
//     console.log("a starts");
//     b();
//     console.log("a ends");
// }

// function b() {
//     console.log("b starts");
//     c();
//     console.log("b ends");
// }

// function c() {
//     console.log("c starts");
//     console.log("c ends");
// }

// a();

// 4. Question
// function x() {
//     console.log("X starts");
//     setTimeout(() => {
//         console.log("Inside setTimeout");
//     }, 0);
//     y();
//     console.log("X ends");
// }

// function y() {
//     console.log("Y starts");
//     console.log("Y ends");
// }

// x();


// 5. Question

// function add(a, b) {
//     return multiply(a, b);
// }

// function multiply(x, y) {
//     return x * y;
// }

// console.log(add(2, 3));


// 6. Question
// function first() {
//     console.log("First function");
//     second();
//     console.log("First function ends");
// }

// function second() {
//     console.log("Second function");
//     third();
//     console.log("Second function ends");
// }

// function third() {
//     console.log("Third function");
// }

// first();


// 7. Question
// function countDown(n) {
//     if (n === 0) {
//         console.log("Blast off!");
//         return;
//     }
//     console.log(n);
//     countDown(n - 1);
// }

// countDown(5);


// 8. Question
// function alpha() {
//     console.log("Alpha starts");
//     setTimeout(() => {
//         console.log("Inside setTimeout");
//     }, 0);
//     beta();
//     console.log("Alpha ends");
// }

// function beta() {
//     console.log("Beta starts");
//     gamma();
//     console.log("Beta ends");
// }

// function gamma() {
//     console.log("Gamma starts");
//     console.log("Gamma ends");
// }

// alpha();



// 9. Question
// function overflow() {
//     console.log("Calling function...");
//     overflow();
// }

// overflow();



// 10. Question
// function outer() {
//     console.log("Outer start");
//     middle();
//     console.log("Outer end");
// }

// function middle() {
//     console.log("Middle start");
//     inner();
//     console.log("Middle end");
// }

// function inner() {
//     console.log("Inner start");
//     setTimeout(() => {
//         console.log("Inside setTimeout");
//     }, 1000);
//     console.log("Inner end");
// }

// outer();


// Bonus Question Challenge
function foo() {
    console.log("Foo starts");
    return bar();
}

function bar() {
    console.log("Bar starts");
    return 42;
}

console.log(foo());


