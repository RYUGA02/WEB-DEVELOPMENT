// Javascript Objects 

// objects are the collection of key-value pairs having the properties and the methods together.


// Object Creation ----- 2 main methods

// simple method 

// let Obj = {
//     name : "kush kumar singh",    // all left side name is called the properties (keys)in Objects.  eg- name,class,school,roll-no.
//      class : 12,                  // After : its called value in objects 
//     school : "K.H.Memorial",      // so,objects is a collection of key:value pairs 
//     "Roll-No" : 17,
//     result : function(){                         // result is called the methods as it is using a function to print. 
//         console.log("You got 94.73% in class 7th");
//     }
// }


// Method - 1 : Factory Function Method

// function Rectangle(){
//     let obj={
//         length : 1,
//         breadth :2,
//         draw: function(){
//             console.log("You Got 94.73% in Class 7th.");
//         }
//     }
//     return obj;
// }
// let result =Rectangle();



// ------------------------------OR ---------------------------------------

// function Rectangle(len, bre) {
//     return Obj = {
//         length: len,
//         breadth: bre,
//         draw: function () {
//             console.log("You Got The 99 marks.");
//         }
//     }
// }


// let result = Rectangle(30, 60);

// Constructor Function should be written in Pascal case.
// Constructor Function is used to initailize/define a properties or methods.That's it.
// Method - 2 : Constructor Function
// function Rectangle(){
//     this.length = 10;
//     this.breadth = 20;
//     this.draw= function(){
//         console.log("Your name is Kush Kumar Singh");
//     }
// }

// Object Creation using the Constructor Function
// let result = new Rectangle();



// -------------------------------- OR ------------------------------------------
// function Rectangle(len, bre) {
//     this.length = len;  // this is a keyword that refers to current working object.On which object we are currently working on.
//     this.area = len * bre;
//     this.breadth = bre; 
// }
// let result = new Rectangle(100, 200);  // new is a keyword that creates the empty object. eg- obj{}; a empty Object.


// Adding the new properties to the Object in javascript is called the dynamic nature of Objects.
// result.Color = "Red";
// console.log(result);

// Deleting the Properties from the Object in javascript.
// delete result.Color;
// console.log(result);



// Primitive Types VS Reference Types in Javascript.


//primitive types
// let a=10;
// let b=a;
// a++;
// console.log(a);   // Values are not same as it creates two different container so updating the one variable does not chnage all the variables in another container.Primitive types copies values from different variables.
// console.log(b);

// Reference Types of Objects in Javascript.
// let A = {value:20};
// let b = A;
// A.value++;
// console.log(A.value);  //values are same for both A and b because all reference types like arrays,function and Objects are copies the memory address not the actual value from another variable.
// console.log(b.value);


// Note---- Constructor Property..

//When you create an object using a constructor function with the new keyword, the constructor function is executed, and the resulting object has a constructor property set to a reference to that constructor function.

// function Rectangle(len, bre) {
//     this.length = len;
//     this.breadth = bre;
//     this.area = len * bre;
// };
// The constructor property shows that createNewObject is made up of Rectangle constructor and Rectangle() function is made up of in-built Function() which takes length , breadth as arguments and the whole (entire code ) inside the ``.

// let createNewObject = new Rectangle(25, 24);
// console.log(createNewObject);     


// Object Cloning Methods in javascript.

// we have 3 different methods in javascript to clone a object . Object cloning method came out because if we type 
// let a={value:10};   and    a=b;   and if you try to increase the value of only a variable as a=11 and b=10 so you will get both of them will have the same values as the other one because we have seen earlier that Reference types copies same memory address so changing the value of one changes the value of other.so to tackle that we have 3 method i.e is --

// <method - 1> = Iteration method

// let source = {
//     Name:"kush kumar singh",
//     class:"No class only college bro",
//     result: "pass",
//     "coding experience":15
// }
// let destination={};    // using the empty object and copying all the values of source into  destination we can create a clone of Objects
// for(let keys in source){
//     destination[keys]=source[keys];
// }
// console.log(destination);
// source.class = "Hello Coders";
// console.log(destination);



// <Method - 2> = Assign Method or Using the assign method.


// Cloning from the single Objects only .
// let source = {
//     length:20,
//     breadth:30,
//     area:600
// }
// let clone = Object.assign({},source);
// console.log(clone);
// source.length = 30;
// console.log(clone);


// Cloning from Multiple sources.
//  source = {
//     length: 20,
//     breadth: 30,
//     area: 600
// }

// let source2 = {
//     color: "red",
//     contrast: 25
// }

// let clone = Object.assign({}, source, source2);
// console.log(clone);
// source.length = 30;
// console.log(clone);



// <Method - 3> = Spread operator (...)

let source = {
    name1: "kush kumar singh",
    caste: "Hinduism",
    age: 22
}

let destination = { ...source };
console.log(destination);
source.age = 23;
console.log(destination);

// so, the conclusion is that to clone an Object just use the spread Operator really easy and effficient for code debugging.