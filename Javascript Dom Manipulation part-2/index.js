// Accessing the Html Dom using the javascript Dom manipulation

// method-1 ---- getElementById();
// let element = document.getElementById("3");
// element.style.backgroundColor = "yellow";


// method-2 ---- getElementsByClassName();
// let element2 = document.getElementsByClassName("Box");
// console.log(element2);
// element2[2].style.backgroundColor = "green";

// method-3 ---- getElementsByTagName();
// let element3 = document.getElementsByTagName("p");
// console.log(element3);
// element3[0].style.backgroundColor = "Yellow";

// method-4 ---- querySelector();
// let element = document.querySelector('.para');
// console.log(element);
// element.style.backgroundColor = "green";

// method-5 ---- querySelectorAll();

// let element = document.querySelectorAll('.para');
// for (let i = 0; i <= element.length; i++) {
//     element[i].style.backgroundColor = "yellow";
// }

//  Modifying the Html Element

// Method-1 ---- innerHTML
// let element = document.querySelector('#firstPara');
// let container = element.innerHTML;
// console.log(container);

// let myPara = "<h1>THIS IS THE HEADING TAGG</h1>";
// element.innerHTML = myPara;


// // Method-2 ---- outerHTML
// let element2 = document.getElementById("link")
// let output = element2.outerHTML
// console.log(output)

// let myPara2 = "<h4>This is the heading Tag now.</h4>"
// element2.outerHTML = myPara2;

// Method-3 ---- textContent
// let element = document.getElementById("box")
// let output = element.textContent
// console.log(output)

// let myPara = "This world is just cruel world by EREN YEAGER"
// element.textContent = myPara;


// Method-4 ---- innerText
// let element = document.getElementById("box")
// let output = element.innerText
// console.log(output)

// let myPara = "This world is just cruel world by EREN YEAGER"
// element.innerText= myPara;


// Adding the New Element to HTML Dom Manipulation'

// Method-1 ---- appendChild() 
// let createElement = document.createElement("div")
// console.log(createElement)
// let MyPara = "Box6"
// createElement.textContent = MyPara
// document.getElementById("box").appendChild(createElement)
// createElement.setAttribute("class","Box")


// Method-2 ---- insertAdjacentElement()
// let createElement = document.createElement("div")
// createElement.textContent = "BOX"
// document.getElementById("box").insertAdjacentElement("afterend",createElement)
// createElement.setAttribute("class","Box")


// Removing the element from HTML using Dom Manipulation
// let deleteElement = document.getElementById("2")
// deleteElement.remove()



//------------------------------------------------------------------------------------------------------------------------------------
