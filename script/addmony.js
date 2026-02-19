document.getElementById("add-mony-btn").addEventListener("click", function () {

    const bankAccount = getValueFromInput("add-mony-bank");
    if (bankAccount == "Select A Bank") {
        alert("Please select a bank");
        return;
    }
    
    const accon = getValueFromInput("add-mony-number");
    if (accon.length != 11) {
        alert("Invalid account number");
        return;
    }

    const amount = getValueFromInput("add-mony-amount");
    if (isNaN(amount) || amount <= 0) {
        alert("Invalid amount");
        return;
    }

    const currantBalance = getBalance();
    const newBalance = currantBalance + Number(amount);

    const pin = getValueFromInput("add-mony-pin");
    if (pin === "1234") {

        alert(`Add Money Success from ${bankAccount} at ${new Date()}`);
        setBalance(newBalance);

        const history = document.getElementById("history-container");

        const newHistory = document.createElement("div");

        newHistory.innerHTML = `
        <div class="transaction-card p-5 bg-base-100">
            Add Money Success from ${bankAccount}, 
            acc-no ${accon}, 
            amount ${amount} taka 
            at ${new Date()}
        </div>
        `;

        history.appendChild(newHistory);

    } else {
        alert("Invalid pin");
        return;
    }
});
