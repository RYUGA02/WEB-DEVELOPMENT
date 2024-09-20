// Javascript setTimeout() and setInterval()


// setTimeout() function in js
// let k = setTimeout(() => console.log(alert("Warning!")),5000)
// console.log(k)   // prints the setTimer ID  only.


// clearTimeout() function in js
// let timerId = setTimeout(function(){
//     let a = prompt("Do you want to cancel?")
//     if('y'== a){
//         console.log("I am running if part!")
//         clearTimeout(timerId)
//     }
//     else{
//         console.log("I am running else part!")
//     }
// },1000)




// passing the function as argument in the setTimeout function

// function myFunction(a, b) {
//     console.log("I am in the function code block!")
//     console.log(a + b);
//     console.log(alert("Hi! everyone how are you?"))
// }


// setTimeout(myFunction(20, 30), 1000)


// ----------------------- setInterval() --------------------------------------

// let a = setInterval(() => console.log(alert("Hello!")), 2000)

function myfunc() {
    let a = prompt("Do you want to cancel?")
    if (a == 'yes') {
        console.log("cancelling the program execution.")
        clearInterval(timerId)
    }
    else {
        let timerId = setInterval(myfunc(), 2000)
    }
}

myfunc();