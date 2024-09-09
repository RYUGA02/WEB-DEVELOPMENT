// Javascript  Arrays

// creating the arrays.

// method -1 ======= Through [] method
// let array = [1,2,34,5,6,7];
// console.log(array);

// method-2 ======= Through the array constructor
// let array = new Array(2,9,4,6,"kush");
// console.log(array);


// Accessing the arrays elements
// let array = [1,2,45,5,6];
// for (let i=0;i<=array.length;i++){
//     console.log(array[i]);
// 

// Adding an element to the array
// we have 4 methods to add the element to the array.
// method-1 : simple method

// let array = new Array(1, 2, 34, 556);
// array[4] = "kush";
// console.log(array);

// Method-2 : Using the push() which adds the new element to the end of the array.
// let array = new Array("kush","kumar","Singh","Rajput");
// array.push("Hello");
// console.log(array);

// Method-3 : Using the unshift() to add the element at the beginning of the array .
// let array = new Array(1,2,4,5,6,7,8,9);
// array.unshift(10);
// console.log(array);

// Method-4 : Using the Splice() to add the element at the middle parts of the array.
// let array = new Array("name","age","class","school");
// array.splice(1,0,"caste");
// console.log(array);



//  Finding the array element or searching the array element.
// for Primitive types ==== 2 methods   (i)=> indexof()   (ii)=> includes().
// Method-1 ======== indexof()
// let array = new Array(10,20,30,40,50);
// console.log(array.indexOf(30));

// method-2 ======= includes()
// let array = new Array ("J","a","v","a","s","c","r","i","p","t");
// console.log(array.includes("i"));

// for Reference types ----> we have the find() function
// let students = [
//     { name: "kush", class: 12, rollNo: 17 },
//     { name: "shubham", class: 12, rollNo: 34 },
//     { name: "Priyanshu", class: 12, rollNo: 37 }
// ]
// let result = students.find((value) => value.name === "kush");
// console.log(result);


// Removing the array elements.
//  let array = [1,"kush",2,4,6677,8,9];
// // method-1 : Using the pop() method to remove the array elements.
// console.log(array.pop());
// console.log(array);


// method-2 : Using the shift() to remove the element from the first position or starting of the array.
// console.log(array.shift());
// console.log(array);


// method-3 : Using the splice () method to remove the array element from the specified location of the array.
// console.log(array.splice(4,1));
// console.log(array);
// console.log(array.splice(2,2,4));
// console.log(array);

// Method-4 : // Method-4 : Using the filter() method to remove the elements from the array.
//  let array = [10,20,30,40,50];
//  let result = array.filter(num => num!=30);
//  console.log(result);

// Emptying an array
// suppose we write something like --
// let array = [10, 20, 30, 40, 50];
// and when we try to empty the array we just reinitialize the array=[]; so this creates array = []; which is wrong because the  array elements will not be deleted or removed by the garbage collector and if the new variable is initailizes to the same variable it will display the same value as previous so this is not the right thing to do for emptying an array.
// let array2 = array;
// array = [];    // Even though we have initialized the array value to empty it still showing the same value of array in array2 because array2 and array is a refrence type and share the same memory address.
// console.log(array2);


// method -1 ====> For correctly emptying the array elements 
// let array = [10,20,30,40,50] ;
// let array2=array;
// array.length = 0;
// console.log(array); // so we have emptied the array elements correctly without leaving any traces of it.
// console.log(array2);

// Method- 2 =====> using the splice() method to empty the array elements,
// let array = [19,20,24,46];
// let array2= array;
// let result = array.splice(0,array.length);
// console.log(array);
// console.log(array2); 

// method -3 =====> Using the loops to empty the array elements.
// let array = new Array(15,30,45,60,75,90);
// let array2 = array;
// while (array.length>0){
//     array.pop();
// };
// console.log(array);
// console.log(array2);


// // Emptying the array elements from the array as objects.
// let objArray = [
//     {name:"kush",rollNo:20},
//     {name:"sarthak",rollNo:30},
//     {name:"rahul",rollNo:23}
// ];
// let objArrayClone = objArray;
// objArray.length = 0;
// console.log(objArray);
// console.log(objArrayClone);

// Combining the array
//method-1 
// let array1 = new Array(1,2,3,4,5);
// let array2 = new Array(6,7,8,9,10);
// console.log(array1.concat(array2));


// Combining the array as Objects\
// method-1 of combining the array as the objects.
// let array = [{ name: "kush", grade: 89, result: "pass" },
// { name: "sidd", grade: 78, result: "pass" },
// { name: "rahul", grade: 90, result: "pass" },
// { name: "choti", grade: 40, result: "fail" }];

// let array2 = [{ name: "shubham", grade: 29, result: "fail" },
// { name: "sidhu", grade: 38, result: "fail" },
// { name: "rakshik", grade: 94, result: "pass" },
// { name: "chuo", grade: 50, result: "pass" }];

// method-1 using only the concat() method
// let combinedobj = array.concat(array2);
// console.log(combinedobj);

// method-2 using combination of both concat() and the filter() methods.
// let combinedArray = array.concat(array2.filter(value => value.result == "pass"));
// console.log(combinedArray);

// slicing the array elements
// let array = new Array("kush",29,33,5,67,8,63);
// let slicedArray = array.slice(3,5);
// console.log(slicedArray);
// console.log(array);


// slicing the array element as objects
// let array = [
//     { name: "kush", age: 29 },
//     { name: "sarthak", age: 33 },
//     { name: "rahul", age: 45 },
//     { name: "priyanshu", age: 37 }
// ];
// let slicedArray= array.slice(1,3);
// console.log(slicedArray);

// spread operator 
// let array = [10,20,30,40,50];
// let array2 = [100,200,300,400,500];
// // let result = [...array,...array2]; // spread operator working as a concat job
// // console.log(result);
//  let spreadCopy = [...array2,"kush","zeeshan"]; // spread operator used to copy the array.
//  console.log(spreadCopy);

// Iterating over the array elements.
// method-1 : using the for-of loops.
// let array = [10,20,30,40,50,"History","Map"];
// for(let value of array){
//     console.log(value==="History");
// }

// method-2 : Using the for-Each loops.
// let array = [10,20,30,40,50];
// array.forEach(function(value){
//     console.log(value);
// });


// joining arrays
// let array1 = [10,20,30,40];
// console.log(array1.join("-"));

// let array = [
//     {name:"kush",age:22},
//     {name:"steve",age:34}
// ];
// console.log(array.join("|||||"));


// spliting an Array
// const str = 'The quick brown fox jumps over the lazy dog.';

// const words = str.split(' ');
// console.log(words[3]);


// Sorting an array
// let array = [38,23,44,76,8,6,100];
// console.log(array.sort((a,b)=>{
//     if(a>b){
//         return 1; // a comes after b
//      } else{
//             return -1;
//         }
//     }
// ));

let array = [200,13230,3,343,445,534,343,13,2,2322,433];
console.log(array.sort((a,b)=>{
    if (a>b){
        return -1;
    }else{
        return 1;
    }
}))