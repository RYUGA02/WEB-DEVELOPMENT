// Javascript Promise

// 1.    Creating the promise     //

// let fragment = document.createDocumentFragment();
// let firstPromise = new Promise((resolve , reject) => {
//     let newElement = document.createElement("h1")
//     newElement.innerHTML = "<p>Hello ! . I am calling from paragraph tag.</p>"
//     fragment.appendChild(newElement)
// })
// document.body.appendChild(fragment)

// 2.   Changing the Promise States ---- pending state, fulfilled state, reject state.   //
// i). pending promise state

// function sayMyName (){
//     console.log("My name is kush kumar singh")
// }

// let firstPromise1 = new Promise((resolve , reject) => {
//     console.log("I am inside the pending promise state.")
//     setTimeout(sayMyName, 2000 ,true)
// })

// ii). fulfilled promise state

// function createNewElement (){
//     let newElement = document.createElement("div")
//     newElement.innerHTML = "<h1>This is a heading tag. </h1>"
//     document.body.appendChild(newElement)
//     console.log("after creating the element . This is the first message.")
// }
// let firstPromise1 = new Promise((resolve , reject ) => {
//     console.log("I am inside the fulfilled promise state.")
//     alert("element will be printed after 10 sec")
//     setTimeout(createNewElement,10000)
//     resolve(true)
// })

// iii). reject promise state

// function createNewElement (){
//     let newElement = document.createElement("div")
//     newElement.innerHTML = "<h1>This is a heading tag. </h1>"
//     document.body.appendChild(newElement)
//     console.log("after creating the element . This is the first message.")
// }
// let secondPromise = new Promise((resolve, reject) => {
//     console.log("I am inside the reject promise state.")
//     setTimeout(createNewElement , 2000)
//     reject(false)
// })

//    then,catch,finally in Promise     //

// i). then in promise
// let thirdPromise = new Promise((resolve, reject) => {
//     if(true)
//     console.log("This is the first then statement in the javascript.")
//     resolve("success")
// })
// thirdPromise
// .then((print) => {
//     console.log("Printing the then statement")
//     console.log(print)
// })

// ii). catch in promise
// let fourthPromise = new Promise((resolve , reject) => {
//     if(true){
//         console.log("This is the first catch statement in the Javascript.")
//     reject("Internal Server Error")
//     }
//     else {
//         console.log("This is the then statement in js.")
//         resolve("success")
//     }
// })

// fourthPromise.then((result) => {
//     console.log("Printing the then statement.")
// }).catch((error) => {
//     console.log("printing the catch statement in javascript.")
//     console.log(error)
// })


// iii). finally in promise
// let fourthPromise = new Promise((resolve , reject) => {
//     if(true){
//         console.log("This is the first catch statement in the Javascript.")
//     reject("Internal Server Error")
//     }
//     else {
//         console.log("This is the then statement in js.")
//         resolve("success")
//     }
// })

// fourthPromise.then((result) => {
//     console.log("Printing the then statement.")
// }).catch((error) => {
//     console.log("printing the catch statement in javascript.")
//     console.log(error)
// }).finally((result) => {
//     console.log("I will run no matter what the if-else statement.")
// })



//        Then chaining in Javascript          //

// let fourthPromise = new Promise((resolve , reject) => {
//     if(false){
//         console.log("This is the first catch statement in the Javascript.")
//     reject("Internal Server Error")
//     }
//     else {
//         console.log("This is the then statement in js.")
//         resolve("success")
//     }
// })

// fourthPromise.then((result) => {
//     console.log(result)
//     return 10
// }).then((anotherResult) => {
//     console.log(anotherResult)
//     return 30
// }).then((anotherResult2) =>{
//     console.log(anotherResult2)
// }).catch((error) => {
//     console.log("This is the error block!")
//     console.log(error)
// })


// Promise.all in Javascript

// // case-1 -- if both promises are fulfiiled
// let lastPromise = new Promise((resolve , reject) => {
//     console.log("My name is Kush Kumar Singh")
//     resolve(true)
// })

// let lastPromise2 = new Promise((resolve , reject ) => {
//     console.log("My name is Rough note Book")
//     resolve(10)
// })

// Promise.all([lastPromise, lastPromise2])
// .then((result) => {
//     console.log("success")
// }).catch((error) => {
//     console.log("Internal server error")
// })

// case-2 -- if both promises are rejected
// let lastPromise = new Promise((resolve , reject) => {
//     console.log("My name is Kush Kumar Singh")
//     reject("error")
// })

// let lastPromise2 = new Promise((resolve , reject ) => {
//     console.log("My name is Rough note Book")
//     reject("failed")
// })

// Promise.all([lastPromise, lastPromise2])
// .then((result) => {
//     console.log("success")
// }).catch((error) => {
//     console.log("Internal server error")
// })

// case-3 ---- if one promise fails and other succeds
const promises = [
    new Promise((resolve) => setTimeout(() => resolve("resolved 1"), 1000)),
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("rejected 2")), 500)),
    new Promise((resolve) => setTimeout(() => resolve("resolved 3"), 2000))
  ];
  
  Promise.all(promises).then((results) => console.log(results)).catch((error) => console.error(error));
  