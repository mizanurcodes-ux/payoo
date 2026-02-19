document.getElementById("get-bonus-btn")
.addEventListener("click", function () {

    const coupon = getValueFromInput("get-bonus-coupon");
    const pin = getValueFromInput("get-bonus-pin");

    // Coupon check
    if (coupon !== "4444") {
        alert("Invalid coupon");
        return;
    }

    // Pin check
    if (pin !== "1234") {
        alert("Invalid pin");
        return;
    }

    // Add Bonus
    const currentBalance = getBalance();
    const newBalance = currentBalance + 100;
    setBalance(newBalance);

    alert("Bonus 100 Taka Successfully Added!");

});
