document.getElementById("pay-bill-money-btn").addEventListener("click", function(){
    const bankAccount = getValueFromInput("pay-bill-bank");
    if(bankAccount==="Select A Bank"){
        alert("Please select a bank")
        return;
    }







    const payBillMoneyNumber = getValueFromInput("pay-bill-money-number")
    if(payBillMoneyNumber.length !=11){
        alert("invalid transfer Pay Bill number")
        return
    }

    const payBillMoneyAmount = getValueFromInput("pay-bill-money-amount")
    
    const currantBalance =  getBalance ()
    const newBalance = currantBalance -payBillMoneyAmount
    console.log(newBalance);
     

    if(newBalance<0){
        alert(`Pay Bill Success from ${bankAccount} at ${new Date()}`);
        setBalance(newBalance)
    }
    const pin = getValueFromInput("pay-bill-money-pin")
    if(pin === "1234"){
        alert("Pay Bill Successfull")
        setBalance(newBalance)
    }
    else{
        alert("invalid Pin")
    }
})