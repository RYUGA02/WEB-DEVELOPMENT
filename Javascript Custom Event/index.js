// Custom Event in Javascript.

// To add your own custom event in javascript follow the below steps.
// 1. For adding -- new CustomEvent("Your-Custom-Event-name",options) (now options may include some extra data you want to send to event. for example : let customEvent = new customEvent("greet",{detail: {name: "kush kumar singh" , message: "This is my first custom event."}}) )
// 2. For Listening -- addEventListener()
// 3. For dispatching the custom event -- document.dispatchEvent(customEventName);

// Create a custom event named greet that will log message Hello how are you?
// Step 1: Create the custom event with `bubbles: true`
// const greetEvent = new CustomEvent("greet", {
//     detail: { 
//         name: "Kush Kumar Singh", 
//         message: "Hello, welcome to JavaScript events!" 
//     },
//     bubbles: true // ✅ This makes sure the event propagates
// });

// // Step 2: Add an event listener before dispatching
// document.addEventListener("greet", function(event) {
//     console.log("Event Triggered: " + event.detail.message);
//     console.log("Name:", event.detail.name);
// });

// // Step 3: Dispatch the event (this will now work)
// document.dispatchEvent(greetEvent);

// 🔰 Basic Questions
// 1️⃣ Create and Trigger a Basic Custom Event
// 👉 Write a JavaScript program that creates a custom event called "greet". When triggered, it should log "Hello from Custom Event!" to the console.
// let customEvent = new CustomEvent("greet", {
//     detail : {
//                 message:"Hello from Custom Event!"
//              },
//     bubbles : true
// });

// document.addEventListener("greet",(event)=>{
//     console.log(event.detail.message);
// })

// document.dispatchEvent(customEvent);


// 2️⃣ Dispatch a Custom Event with Data (detail)
// 👉 Modify the previous program to include a name in the event's detail.
// let customEvent = new CustomEvent("greet", {
//     detail : {
//                 name: "kush kumar singh",
//                 message:"Welcome from Javascript Custom Event!"
//              },
//     bubbles : true
// });

// document.addEventListener("greet",(event)=>{
//     console.log("Hello!" +event.detail.name +" "+event.detail.message);
// })

// document.dispatchEvent(customEvent);


// 3️⃣ Event Bubbling with Custom Events
// 👉 Create a <div> containing a <button>.
//     Add a "click" event on the button that dispatches a "customClick" event.
//     Add an event listener to the <div> that listens for "customClick" and logs "Custom event bubbled to div!".
//     💡 Hint: Use { bubbles: true } when creating the event.
// let customEvent = new CustomEvent("customClick", {
//     detail: {message: "Custom event bubbled to div!."},
//     bubbles : true
// })

// document.getElementById("divContainer").addEventListener("customClick",(event)=>{
//     // console.log("hello");
//     console.log(event.detail.message);
// })

// document.getElementById("btn").addEventListener("click",function(){
//     this.dispatchEvent(customEvent);
// })

// 4️⃣ Prevent Default Behavior in a Custom Event

// 👉 Create a custom event "formSubmit" and attach it to a form.
//     When the form is submitted, dispatch "formSubmit", but prevent the default form submission.
//     Log "Custom form submit event triggered!".
// 💡 Hint: Use event.preventDefault()
// ✅ Step 1: Create a custom event "formSubmit"
// let customEvent = new CustomEvent("formSubmit", {
//     detail: { message: "Custom form submit event triggered!" },
//     bubbles: true // Allow event bubbling
// });

// ✅ Step 2: Add an event listener to the form to listen for "formSubmit"
// document.querySelector("#formContainer").addEventListener("formSubmit", function(event) {
//     console.log(event.detail.message);
// });

// // ✅ Step 3: Intercept the form submission, prevent it, and dispatch the custom event
// document.querySelector("#formContainer").addEventListener("submit", function(event) {
//     event.preventDefault(); // Prevent default form submission
//     this.dispatchEvent(customEvent); // Dispatch the custom event
// });


// 5️⃣ Custom Keyboard Event

// 👉 Create a custom event called "capsLockWarning".
//     When the user presses Caps Lock, dispatch this event and log "Warning: Caps Lock is ON!".
//     Ensure it only fires once per key press.

// 💡 Hint: Use event.getModifierState("CapsLock").
// let customEvent = new CustomEvent("capsLockWarning",{
//     detail:{message : "Warning: Caps Lock is ON"},
//     bubbles:true
// })

// document.addEventListener("capsLockWarning",function(event){
//     console.log(event.detail.message);
// })

// document.addEventListener("keydown", function(event) {
//     if (event.getModifierState("CapsLock")) {
//         document.dispatchEvent(customEvent); // Dispatch custom event when Caps Lock is ON
//     }
// });


// 🔴 Advanced Questions
// 6️⃣ Using EventTarget to Create a Custom Event System

// 👉 Create a custom event system using EventTarget.
//     Define a class EventSystem that extends EventTarget.
//     Add a method triggerCustomEvent(name, data) that dispatches events.
//     Listen for "customAction" and log the received data.

// 💡 Hint: Use dispatchEvent(new CustomEvent(name, { detail: data })).
// ✅ Step 1: Create a class that extends EventTarget
class EventSystem extends EventTarget {
    triggerCustomEvent(name, data) {
        // ✅ Step 2: Dispatch the custom event
        this.dispatchEvent(new CustomEvent(name, { detail: data }));
    }
}

// ✅ Step 3: Create an instance of EventSystem
const eventHandler = new EventSystem();

// ✅ Step 4: Add an event listener for "customAction"
eventHandler.addEventListener("customAction", (event) => {
    console.log("Received Data:", event.detail);
});

// ✅ Step 5: Trigger the "customAction" event with custom data
eventHandler.triggerCustomEvent("customAction", { message: "Hello from Custom Event!" });













// 7️⃣ Custom Event with Multiple Event Listeners

// 👉 Create a "dataLoaded" event that multiple listeners respond to.

//     When triggered, log "Data received!" from multiple functions.
//     Demonstrate that multiple handlers execute in order.

// 💡 Hint: Use multiple .addEventListener() calls.