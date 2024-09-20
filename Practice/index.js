// firstChild , lastChild  and nodeChild

// 1.  firstChild and firstElementChild
// let id = document.getElementById("container")
// console.log(id.firstChild)          // This means that gap is treated as the first element so you will get output as #text
// console.log(id.firstElementChild)  // This gives the selected id first Element child means the gap is excluded.

// 2.  lastChild and lastElementChild
// let id = document.querySelector("#container")
// console.log(id.lastChild)         // This gives the lastChild of the selected id instead of giving the element span it gives the gap 
// console.log(id.lastElementChild)  // This gives the selected id last Element child means the gap is excluded.

// 3.  nodeChild
// let id = document.querySelector("#container")
// console.log(id.childNodes)  // This gives the element all childNodes as the array.

// 4. Other ways to use

// i. elem.childNodes[0] ==  elem.firstChild  or elem.childNodes[1] == elem.firstElementChild
// let id = document.getElementById("container")
// let a = id.childNodes[1]
// let b = id.firstElementChild
// console.log(a)
// console.log(b)

// ii. elem.childNodes[elem.childNodes.length-1] == elem.lastChild
// let id = document.getElementById("container")
// let a = id.childNodes[id.childNodes.length - 1]
// let b = id.lastChild
// console.log(a)
// console.log(b)


//--------------------------------------------------------------------------------------------------------------------------------------


// Element only Navigation 

// 1. previousElementSibling
// let id = document.getElementById("container")
// console.log(id.previousElementSibling)

// 2. nextElementSibling
// let id = document.getElementById("container")
// console.log(id.nextElementSibling)

// 3. firstElementChild
// let id = document.getElementById("container")
// console.log(id.firstElementChild)

// 4. lastElementChild
// let id = document.getElementById("container")
// console.log(id.lastElementChild)


//--------------------------------------------------------------------------------------------------------------------------------------------

// Dom Manipulation All Operations(accessing,updating,adding,removing)

// 1. Accessing the Element

// i. getElementById()
// let id = document.getElementById("container")
// console.log(id)

// ii. getElementsByClassName()
// let Id = document.getElementsByClassName("box")
// console.log(Id)
// let a = console.log(Id[0])
// for (let i = 0; i <= Id.length; i++) {
//     console.log(Id[i])
// }

// iii. getElementsByTagName()
// let id = document.getElementsByTagName("div")
// console.log(id)
// for(let i = 0; i<=id.length; i++){
//     console.log(id[i])
// }

// iv. querySelector()
// let element = document.querySelector("div")
// console.log(element)

// v. querySelectorAll()
// let element = document.querySelectorAll("div")
// console.log(element)


// 2. Modifying the Html Dom Element

// method-1 == innerHTML()
// let element = document.getElementById("container")
// element.innerHTML = "<ul><li>This is the first List Item.</li></ul>"
// let updated = element.innerHTML
// console.log(element)

// method-2  == innerText()
// let element = document.getElementsByClassName("last")
// let updated = element[0].innerText
// element[0].innerText = "<h1>This is the last man standing tag in the world.<h1>"
// console.log(element)

// method-3 == outerHTML()
// let element = document.getElementsByTagName("div")
// let update = element[0].outerHTML
// element[0].outerHTML = "<h1>THIS IS THE FIRST TAG WHICH IS WHY IT'S IN BIG(CAPITAL) LETTERS.<h1>"
// console.log(element)

// method-4 == textContent()
// let element = document.getElementsByClassName("box")
// let update = element[1].textContent
// element[1].textContent = "This is Fate of War."
// console.log(element)

// 3. Adding new Html element by Dom Manipulation.

// method-1 == appendChild()
// let id = document.getElementById("container")
// let newElement = document.createElement("h4")
// newElement.textContent = "This is the fate of war."
// id.appendChild(newElement)


// method-2 == insertAdjacentElement()

// i. afterbegin
// let id = document.getElementById("container")
// let newElement = document.createElement("span")
// newElement.textContent = "This is Another span Tag part-2"
// id.insertAdjacentElement("afterbegin", newElement)

// ii. beforebegin
// let id = document.getElementById("container")
// let newElement = document.createElement("span")
// newElement.textContent = "This is Another span Tag part-2"
// id.insertAdjacentElement("beforebegin", newElement)

// iii. afterend
// let id = document.getElementById("container")
// let newElement = document.createElement("span")
// newElement.textContent = "This is Another span Tag part-2"
// id.insertAdjacentElement("afterend", newElement)

// iv. beforeend
// let id = document.getElementById("container")
// let newElement = document.createElement("span")
// newElement.textContent = "This is Another span Tag part-2"
// id.insertAdjacentElement("beforeend", newElement)


// Removing the Html Element by using the Dom Manipulation.
// let element = document.getElementsByClassName("box")
// let remove = element[1].remove()
// console.log(remove)

// Three Important Methods

// method-1 : matches()
// let element = document.getElementById("eren")
// console.log(element.matches(".box"))

// method-2 : closest()
// let element = document.getElementsByClassName("box")
// console.log(element[0].closest("h1"))

// method-3 : contains()
// let element = document.getElementById("container")
// console.log(element.contains(item2))

// Attribute Methods

// method-1 : hasAttribute
// let element = document.getElementById("item2")
// console.log(element.hasAttribute("class"))

// method-2 : getAttribute
// let element = document.getElementsByClassName("box")
// console.log(element[0].closest("h1"))

// method-3 : setAttribute
// let element = document.getElementsByClassName("last")
// console.log(element[0].setAttribute("class", "box last first"))

// method-4 : removeAttribute
// let element = document.querySelector(".last")
// console.log(element.removeAttribute("class"))

// Another Insertion Methods

// 1. append()
// let element = document.querySelector(".last")
// let newElement = document.createElement("div")
// newElement.textContent = "College Life Sucks!"
// element.append(newElement)

// 2. prepend()
// let element = document.querySelector(".last")
// let newElement = document.createElement("div")
// newElement.textContent = "College Life Sucks!"
// element.prepend(newElement)

// 3. before()
// let element = document.querySelector(".last")
// let newElement = document.createElement("div")
// newElement.textContent = "College Life Sucks!"
// element.before(newElement)

// 4. after()
// let element = document.querySelector(".last")
// let newElement = document.createElement("div")
// newElement.textContent = "College Life Sucks!"
// element.after(newElement)


// className and classList

// let element = document.querySelector(".last")
// element.className = "eren"
// console.log(element.className)



// let element = document.querySelector(".last")
// element.className = "virat sachin pointing first"
// element.classList.add("kush")
// element.classList.remove("pointing")
// element.classList.toggle("first")
// console.log(element.classList.contains("virat"))


// setTimeout() and setInterval()

// setTimeout(() => console.log(alert("Hello ! sayonara")), 2000)

// function myfunc() {
//     console.log(alert("Gintama best anime of all Time!"))
// }

// let instruction = prompt("Do you want to clear")
// if ('y' == instruction) {
//     clearTimeout(ans)
// }
// else {
//     let ans = setTimeout(myfunc(), 2000)
// }

// setInterval()
function myfunc() {
    console.log(alert("Gintama best anime of all Time!"))
    setInterval(myfunc(), 3000)
}

let instruction = prompt("Do you want to clear")
if ('y' == instruction) {
    clearInterval(ans)
}
else {
    let ans = setInterval(myfunc(), 3000)
}
