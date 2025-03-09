// Debounce function
function debounce(func, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => func.apply(this, args), delay);
    };
}

// Function to simulate search request
function searchHandler(event) {
    let searchTerm = event.target.value;
    document.getElementById("output").textContent = "Searching for: " + searchTerm;
}

// Get the input element
let input = document.getElementById("search");

// Add event listener with debouncing
input.addEventListener("input", debounce(searchHandler, 500));

