// Modifying the css using the various methods of dom manipulation

document.title = "Javascript modification of css using various methods"


// method-1 ---- style method     // we can use onluy single css properties by using the style meth
// let element = document.getElementById("Box-Container")
// element.style.backgroundColor = "red"

// method-2 ---- cssText method    // we can use multiple css properties by using the cssText method
// let element1 = document.getElementById("heading")
// element1.style.cssText = "background-color:yellow;  font-size:50px;" 


// method-3 ---- attribute method
let element = document.getElementById("heading")
element.setAttribute("class", "firsth1")