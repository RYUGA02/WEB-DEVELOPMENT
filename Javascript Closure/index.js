// Javascript Closure

// Lexical Scoping 
// function sayMyName(){
//     let name = "Kush Kumar Singh"
//     function printingName(){
//         console.log("My Name is :", name)
//     }
//     printingName()
// }
// sayMyName()

// Closure
// function sayMyName(){
//     let name = "kush kumar singh"
//     function printingName(){
//         console.log("My Name is :", name)
//     }
//     return printingName
// }
// let result = sayMyName()
// result()


// Practical Implementation
let Element1 = document.getElementById("btn-1")
let Element2 = document.getElementById("btn-2")

function changingColor(color){

  function printingColor(){
      document.body.style.backgroundColor = `${color}`
  }
  return printingColor
}

 Element1.onclick = changingColor("Orange")
 Element2.onclick = changingColor("Red")

// or  prints the same


// let Element1 = document.getElementById("btn-1")
// let Element2 = document.getElementById("btn-2")

// function changingColor(color){

//     return function printingColor(){
//       document.body.style.backgroundColor = `${color}`
//   }
// }

//  Element1.onclick = changingColor("Orange")
//  Element2.onclick = changingColor("Red")