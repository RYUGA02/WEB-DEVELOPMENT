// 🟢 Basic Level Questions
// 1. Simple IIFE Execution

// 👉 Question: Write an IIFE that logs "Hello, World!" to the console.
(function display() {
    console.log("Hello, World!.")
})();

// 2. IIFE with Parameters

// 👉 Question: Modify the IIFE to take a name as a parameter and print "Hello, <name>!"
// 💡 Expected Output for Input ("Kush"):
(function printName(name) {
    console.log(`Hello, ${name}`)
})("Kush");

// 3. IIFE Returning a Value

// 👉 Question: Create an IIFE that takes two numbers as parameters and returns their sum. Store the result in a variable and log it.
// 💡 Expected Output for Input (5, 7):
// let result = (function sum(x, y) {
//     return x + y;
// })(10, 20);
// console.log("Result :", +result)

// // 4. IIFE to Create a Counter

// // 👉 Question: Use an IIFE to create a counter object with increment, decrement, and getCount methods. The counter should start from 0 and should not allow direct modification.
// let result2 = (function calculate() {
//     let count = 0;
//     return {
//         increment: function () {
//             count++
//             console.log("Count :" + count)
//         },
//         decrement: function () {
//             count--
//             console.log("Count :" + count)
//         },
//         getCount: function () {
//             return count
//         }
//     }
// })();

// result2.increment()
// result2.increment()
// result2.increment()
// result2.decrement()
// console.log("Total Count :" + result2.getCount())

// 5. IIFE to Filter Even Numbers from an Array

// 👉 Question: Write an IIFE that takes an array of numbers and logs only the even numbers.
// 💡 Example Input:
// [1, 2, 3, 4, 5, 6]
// 💡 Expected Output:
// 2, 4, 6
// let arr = [1, 2, 3, 4, 5, 6]
// let result3 = (function evenNumber(arr) {
//     let value = []
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 == 0) {
//             console.log("Printing the even number....")
//             value.push(arr[i])
//         }
//     }
//     return value
// })(arr);

// console.log("The result :" + result3);

// 6. IIFE for String Reversal

// 👉 Question: Write an IIFE that takes a string and returns the reversed string.
// 💡 Example Input: "hello" 💡 Expected Output: "olleh"
// (function reverseString(str) {
//     console.log("Reversing the string .....");
//     let reversedString = [...str].reverse().join("");
//     console.log(reversedString)
// })("RaceCar");


// 7. IIFE to Implement a Private Bank Account

// 👉 Question: Create a bank account using an IIFE that has private variables balance and public methods deposit(), withdraw(), and getBalance().
// The user should not be able to modify balance directly.
// 💡 Example Usage:
// let bankAccount = (function bankAccount() {
//     let balance = 0; // private variable
//     return {
//         deposit: function (amount) {
//             if (amount <= 0) {
//                 console.log("Error: Deposit amount must be greater than zero.");
//                 return;
//             }
//             balance += amount;
//             console.log(`Deposited: ${amount}, New Balance: ${balance}`);
//         },
//         withdraw: function (amount) {
//             if(amount > balance){
//                  console.log("Sorry Transcation failed. Not enough money.")
//             }else{
//                 balance -= amount
//                 console.log(`The Withdrawal Money is ${amount} and Total Amount is : ${balance}`)
//             }

//         },
//         getBalance: function () {
//             console.log(`Current Balance: ${balance}`);
//             return balance
//         }
//     }
// })();

// bankAccount.deposit(1000);
// bankAccount.withdraw(500);
// console.log(bankAccount.getBalance()); // Output: 500


// 8. IIFE for Generating Unique IDs

// 👉 Question: Write an IIFE that returns a function to generate unique IDs each time it is called.
// 💡 Example Usage:
let generateID = (function getUniqueID() {
    let counter = 0;
    return function () {
        counter++
        console.log("Generating a unique ID....")
        return `ID-${counter}`
    }
})();
// const generateID = getUniqueID();
console.log(generateID()); // Output: ID-1
console.log(generateID()); // Output: ID-2
console.log(generateID()); // Output: ID-3

// 9. IIFE for Caching API Responses

// 👉 Question: Create an IIFE-based function that caches API responses. If the same API is called again, return the cached response instead of making a new request.
// 💡 Example Usage:
let fetchData = (function () {
    let cache = {}; // Private cache object

    return async function (url) {
        if (cache[url]) {
            console.log("Returning from cache...");
            return cache[url]; // Return cached response
        }

        console.log("Fetching from API...");
        try {
            let response = await fetch(url); // Fetch the data
            if (!response.ok) {
                throw new Error(`HTTP Request failed. Status code: ${response.status}`);
            }
            let data = await response.json(); // Convert to JSON
            cache[url] = data; // Store response in cache
            return data;
        } catch (error) {
            console.error("Error:", error.message);
        }
    };
})();

// Example Usage:
fetchData("https://jsonplaceholder.typicode.com/users/2").then(console.log); // Fetching from API...
fetchData("https://jsonplaceholder.typicode.com/users/2").then(console.log); // Returning from cache!
fetchData("https://jsonplaceholder.typicode.com/users/1").then(console.log); // Fetching from API...
