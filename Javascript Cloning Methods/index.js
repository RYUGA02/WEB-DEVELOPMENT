// Object Cloning  -- We have diiferent methods to create object cloning in javascript

// Method-1 ---- Empty object {}
// let Obj = {
//     name: "kush",
//     age: 12,
//     rollNo: 13
// };

// let clone = {};
// for (let keys in Obj) {
//     clone[keys] = Obj[keys];
// };
// console.log(clone);
// Obj.color = 'red';
// console.log(Obj);
// console.log(clone);



// Method-2 ---- spread operator
// let Obj = {
//     name: "kush",
//     age: 12,
//     rollNo: 13
// };
// let clone = {...Obj};
// console.log(clone);
// Obj.color = "White";
// console.log(Obj);


// Method-3 ---- Assign Operator
// let Obj = {
//     name: "kush",
//     age: 12,
//     rollNo: 13
// };

// let clone = Object.assign({}, Obj);
// Obj.color = "Red";
// console.log(clone);
// console.log(Obj);


// Method-4 ---- JSON.parse and JSON.stringify
// let Obj = {
//     name: "kush",
//     age: 12,
//     rollNo: 13
// };

// let clone = JSON.parse(JSON.stringify(Obj));
// console.log(clone);
// Obj.color = "Yellow";
// console.log(Obj);
// console.log(clone);

// Method-5 ---- object.create()
let Obj = {
    name: "kush",
    age: 12,
    rollNo: 13
};

let clone = Object.create(Obj);
console.log(clone.name);
console.log(clone.age);
console.log(clone.rollNo);