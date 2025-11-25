let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

const titleInput = document.getElementById("title");
const amountInput = document.getElementById("amount");
const list = document.getElementById("list");
const balance = document.getElementById("balance");

document.getElementById("addBtn").addEventListener("click", () => {
    // console.log("button clicked!!!");
    const title = titleInput.value.trim();
    const amount = Number(amountInput.value);

    if(!title || !amount)  {
        alert("Please end both title and amount!!!");
        return;
    }

    const expense = {
        id: Date.now(),
        title,
        amount
    }

    // console.log(JSON.stringify(expense));

    expenses.push(expense);

    console.log(JSON.stringify(expenses));

    saveData();
    render();

    titleInput.value = "";
    amountInput.value = "";
});

function render() {
    list.innerHTML = "";
    let total = 0;

    expenses.forEach(exp => {
        total += exp.amount;
        console.log(total);

        const li = document.createElement("li");
        li.innerHTML = `
            ${exp.title}
            <span class="amount">₹${exp.amount}</span>
            <button class="delete-btn" onclick="deleteExpense(${exp.id})">X</button>
        `;

        list.appendChild(li);
    })

    balance.innerText = "₹" + total;
}

function deleteExpense(id) {
    expenses = expenses.filter(exp => exp.id != id);
    saveData();
    render();
}

function saveData() {
    localStorage.setItem("expenses", JSON.stringify(expenses));
}

// initial load
render();