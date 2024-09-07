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



// Method - 2 : Constructor Function
// function Rectangle(){
//     this.length = 10;
//     this.breadth = 20;
//     this.draw= function(){
//         console.log("Your name is Kush Kumar Singh");
//     }
// }
// let result = new Rectangle();



// -------------------------------- OR ------------------------------------------
function Rectangle(len, bre) {
    this.length = len;
    this.breadth = bre;
    this.area = len * bre;

}
let result = new Rectangle(100, 200);