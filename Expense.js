const expenseForm = document.getElementById('expense-form');
const expenseText = document.getElementById('expense-text');
const expenseAmount = document.getElementById('expense-amount');
const expenseList = document.getElementById('list');
const totalExpense = document.getElementById('total');

let expenses = [];

// Function to add expense
function addExpense(text, amount) {
  if (text.trim() !== '' && amount.trim() !== '') {
    const expense = {
      id: generateID(),
      text: text,
      amount: +amount
    };

    expenses.push(expense);
    updateUI();
    updateTotal();
  } else {
    alert('Please fill in both fields');
  }
}

// Function to generate random ID
function generateID() {
  return Math.floor(Math.random() * 100000000);
}

// Function to update UI
function updateUI() {
  expenseList.innerHTML = '';
  expenses.forEach(expense => {
    const li = document.createElement('li');
    li.innerHTML = `
      ${expense.text}: <span>$${expense.amount}</span>
      <button class="delete-btn" onclick="removeExpense(${expense.id})">X</button>
    `;
    expenseList.appendChild(li);
  });
}

// Function to remove expense
function removeExpense(id) {
  expenses = expenses.filter(expense => expense.id !== id);
  updateUI();
  updateTotal();
}

// Function to update total expenses
function updateTotal() {
  const total = expenses.reduce((acc, curr) => acc + curr.amount, 0);
  totalExpense.textContent = total;
}

// Event listener for form submission
expenseForm.addEventListener('submit', e => {
  e.preventDefault();
  addExpense(expenseText.value, expenseAmount.value);
  expenseText.value = '';
  expenseAmount.value = '';
});
