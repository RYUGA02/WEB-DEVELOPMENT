//   Javascript Performance Measurement Method


//   Performance.now() method


// Inefficient code 1

// calculating the time taken by the below code to run.
let startTime3 = performance.now();
for(let i=0;i<100;i++){
    let newElement = document.createElement("p")
    newElement.textContent = "This is the para "+(i+1);
// reflow and Repaint are more
    document.body.appendChild(newElement)
}
let endTime3 = performance.now();
const elapsedTime = endTime3 - startTime3;
console.log("The Total Time Taken By Code 1:",elapsedTime)


// // effiecient code 1

let startTime1 = performance.now()
let myDiv1 = document.createElement("div")
for(let i=1;i<=100;i++){
    let para = document.createElement("p")
    para.textContent = "This is the para"+i;
// NO Reflow and No Repaint till now
    myDiv1.appendChild(para)
}
document.body.appendChild(myDiv1)
let endTime1 = performance.now()
console.log("The Total Time Taken By Code 2 :",endTime1-startTime1)


// Best code optimization and always to follow in your program
 
// Document Fragment method : DocumentFragment()
let startTime = performance.now()
let fragment = document.createDocumentFragment();
let myDiv2 = document.createElement("div")
for(let i=1;i<=100;i++){
    let newElement2 = document.createElement("p")
    newElement2.textContent = "This is the heading tag "+i;
    myDiv2.appendChild(newElement2)
}
document.body.appendChild(myDiv2)
document.body.appendChild(fragment)
let endTime = performance.now()
console.log("The Total Time Taken By The Best Code :",endTime-startTime)