const balance = document.getElementById("balance"),
  moneyPlus = document.getElementById("moneyPlus"),
  moneyMins = document.getElementById("moneyMins"),
  list = document.getElementById("list"),
  form = document.getElementById("form"),
  text = document.getElementById("text"),
  amount = document.getElementById("amount");

let transactions = [];

// Initialize the app
init();

// Add event listener
form.addEventListener("submit", addTransaction);

function addTransaction(e) {
  e.preventDefault();

  if (text.value.trim() === "" || amount.value.trim() === "") {
    alert("Please add text and amount");
    return;
  }

  const transaction = {
    id: generateID(),
    text: text.value,
    amount: +amount.value, // Convert to number
  };

  // Add to transactions array
  transactions.push(transaction);

  // Update local UI
  addTransactionDOM(transaction);
  updateTransaction();

  // Clear inputs
  text.value = "";
  amount.value = "";
}

function generateID() {
  return Math.floor(Math.random() * 10000000);
}

function addTransactionDOM(transaction) {
  const sign = transaction.amount < 0 ? "-" : "+";
  const item = document.createElement("li");

  item.classList.add(transaction.amount < 0 ? "minus" : "plus");

  item.innerHTML = `
    ${transaction.text} 
    <div>
      <span>${sign}$${Math.abs(transaction.amount)}</span> 
      <button class="delete" onclick="removeTransaction(${
        transaction.id
      })">x</button>
    </div>
  `;

  list.appendChild(item);
}

function removeTransaction(id) {
  transactions = transactions.filter((transaction) => transaction.id !== id);
  init();
}

function init() {
  list.innerHTML = "";

  if (transactions.length === 0) {
    const item = document.createElement("li");
    item.innerHTML = "No Transaction";
    list.appendChild(item);
  } else {
    transactions.forEach(addTransactionDOM);
  }

  updateTransaction();
}

function updateTransaction() {
  const amounts = transactions.map((transaction) => +transaction.amount); // Ensure numbers

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  balance.innerText = `$${total}`;
  moneyPlus.innerText = `+$${income}`;
  moneyMins.innerText = `-$${expense}`;
}
