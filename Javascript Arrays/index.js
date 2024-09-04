// Javascript Array
//------------------------------------------------------------------------------------------------------------------------------
// Creation of Arrays

// Method 1  ---- By array literals '[]'
// let arr = [1,2,3,4,5,6];
// console.log("The answer of the array is:",arr);


// // Method 2  ----- By Array Constructor
// let arr1 = new Array(1,2,3,4,5,6);
// console.log("The answer of the array is:",arr1);

// --------------------------------------------------------------------------------------------------------------------------------

// Array Accessing

// let arr = ["kush", 29, true, 39];
// // console.log(arr[0]);
// // console.log(arr[1]);
// // console.log(arr[2]);
// // console.log(arr[3]);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

//------------------------------------------------------------------------------------------------------------------------------------

// Array Methods

// 1. toString() ------- Used to Convert the array into the string.

// let arr = [1,2,true,"Kush"];
// let Convert = arr.toString();
// console.log(Convert);

// 2. Join()  --------  used to join the array element by seperator.
// let arr = [1, 2, true, "Kush"];
// console.log(arr.join(" - "));   // here you can replace - seperator with your choice.

// 3. Push() ---------- Used to add new element to the array. Returns the length of the array
// let arr = [1, 2, 3, "Shubham", "Kush", "Samarth", "Zeeshan", "Laden", "Shahil", 27];
// console.log(arr.push("were Friends"));
// console.log(arr);

// 4. Pop() ---------- Used to remove the element from the array from the extreme right position. Returns the removed element from array.
// let arr = [1, 2, true, "Kush"];
// console.log(arr.pop());
// console.log(arr.length);
// console.log(arr);

// 5. Unshift() ---------- Used to add the element to the first index of the array. Returns the array updated length.
// let arr = [1,"kush",3,true];
// console.log(arr.unshift("First"));
//console.log (arr);

// 6. Shift()  -------- Used to remove the first element from the array
// let arr = [11, 32, 44, 45];
// console.log(arr.shift());
// console.log(arr);

// 7. delete ------- used to delete the array elements but it leaves the spece for the elements to be added in that deleted space.
// let del = [1, 2, 3, 4, 5];
// delete del[2];
// console.log(del);

// 8. concat() ----- used to add two arrays together.
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let arr3 = [7, 8, 9];
// // console.log(arr1.concat(arr2));
// console.log(arr1.concat(arr2,arr3));


// 9. sort() ------- used to sort the array element based on the condition given inside the compare bracket
// let arr = [1,8,3,5,782,,34,567757,3266,67,8785,532,7,5,4];
// let sorted = arr.sort((a,b)=>{
//     return a-b;
// });
// console.log(sorted);


// 10. reverse() ------- used to reverse the array elements.
// let arr = [1, 8, 3, 5, 782, , 34, 567757, 3266, 67, 8785, 532, 7, 5, 4];
// let sorted = arr.sort((a, b) => {
//     return a - b;
// }).reverse();

// console.log(sorted);


// 11. splice() ------ used to add , delete , modify the array element anywhere in the array. creates a new array

// let arr = [1,2,3,4,5];
// console.log(arr.splice(2,0,"Kush is King"));   // adding the element at the position specified as 2.
// console.log(arr);

// let arr = [1,2,4,"Kush",true];
// console.log(arr.splice(0,3));                  // deleting the element from the array at the position specified as 3.

// let arr = [1,2,43,"kush"];
// console.log(arr.splice(4,"kumar","singh"));
// console.log(arr);


// 12. slice() ------ used to give portion from the original array.

// let arr = ["banana","apple","orange","mango","pineapple","chiku","dragon fruit"];
// console.log(arr.slice(2,4));


// 13. map() -------- used to create a new array based on the operation performed through the function.

// method 1
// let arr = [10, 30, 70, 80];
// console.log(arr.map(kush));
// function kush(num) {
//     return num * 2;
// }

// method 2
// let arr = [25, 30, 35, 40, 45];
// console.log(arr.map((num) => { return num * 4 }));


// method 3
// let arr = [36,49,64,81,100];
// let ans = arr.map(Math.sqrt);
// console.log(ans);


// 14. filter() ------ used to filter the array element based on some conditions provided on compare bracket.

// method 1

// let arr = [0,1,2,3,4,5,6,7,8,9,10];
// let ans = arr.filter((num)=>{
//     if(num%2==0){
//         return true;
//     }else{
//         return false;
//     }
// });

// console.log(ans);


// method 2

// function isPositive(value) {
//     return value > 0;
// }

// let filtered = [112, 52, 0, -1, 944].filter(isPositive);
// console.log(filtered);


// 15. reduce() --------- allows you to execute a provided function (reducer) on each element of an array, reducing the array to a single value.

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let reducedAns = arr.reduce((a,b) =>{
//     return a+b;
// });
// console.log("The answer is:", reducedAns); 



// 16. Index0f()   ----- gives the index of the array elements
// let arr = ["Rolando", "Messi", "kush", "Alan Walker", "Ghost of Tsushima"];
// let indexAns = arr.indexOf("kush");

// for (let i = 0; i < arr.length; i++) {
//     let value = arr[i];
//     let index = arr.indexOf(arr[i]);
//     console.log("The index of ", value, "is :", index);
// }


// find() ------ find() returns the value of the first element in an array that passes a test (provided by a function).

let age = [17, 16, 45, 58, 32, 43];
let result = age.find((val) => {
    if (val >= 18) {
        return true;
    }
    else {
        return false;
    }
});

console.log(result);  // it gives the one answer only if it satisfy the condition 

