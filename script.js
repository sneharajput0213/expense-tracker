let expense = document.getElementById("expense");
let amt = document.getElementById("amt");
let btn1 = document.getElementById("btn1");
let totalAmt = document.getElementById("totalAmt");
let totalIn = document.getElementById("totalIn");
let totalExp = document.getElementById("totalExp");
let list = document.getElementById("list");
let expenseVal = 0;
let incomeVal = 0;
let arrList = [];
btn1.onclick = function(){
    let name = expense.value.trim();
    let amount = Number(amt.value);

    if (name === "" || isNaN(amount) || amt.value.trim() === "") {
        alert("Please enter valid name and amount.");
        return;
    }

    arrList.push({ name, amount });

    let li = document.createElement("li");
    li.textContent = `${name} ₹${amount}`;
    li.classList.add(amount >= 0 ? "income" : "expense");
    list.appendChild(li);

    if (amount > 0)
        incomeVal += amount;
    else if (amount < 0)
        expenseVal += amount;

    totalIn.textContent = "Total Income: ₹" + incomeVal;
    totalExp.textContent = "Total Expense: ₹" + expenseVal;
    totalAmt.textContent = "Total Amount: ₹" + (incomeVal + expenseVal);

    expense.value = "";
    amt.value = "";
}
