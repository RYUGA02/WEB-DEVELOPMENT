// Javascript Events

// 1. EventListener
// i) addEventListener()
// function changeText(){
//     console.log("This is working")
//    element.textContent = "kush kumar singh"
// }

// let element = document.getElementById("fpara")
// element.addEventListener("click", changeText)

// ii) removeEventListener()

// function myFunc(){
//    alert("How are You all?") 
// }

// let element = document.getElementById("fpara")
// element.addEventListener("click",myFunc)

// // element.removeEventListener("click",myFunc)


// 2. Phases of Events
// i)Going to use the usecapture() method

// function fontSize() {
//     console.log("Running Perfectly");
//     element.style.fontSize = "100px";
// }
// let element = document.getElementById("spara")

// element.addEventListener("click", fontSize,true)\

// 3. Event Object
// function Input(event){
//     console.log(event)
//     alert("Warning! I am changing the text color !")
//     element.style.color = "Orange"
// }
// let element = document.getElementById("container")
// element.addEventListener("click",Input)

// 4. Default parameter
// function sum() {
//     event.preventDefault();
//     alert("The sum of 10 and 20 is :", (10 + 20))
// }
// let element = document.getElementById("Anchor")
// element.addEventListener("click", sum)


// 
function alertMsg (){
    alert("The clicked paragraph is:", window.target.textContent);
    
}

let element = document.getElementById("container")
for(let i=0; i<= element.length; i++){
    let elem = element[i];
    elem.addEventListener("click", alertMsg)
}