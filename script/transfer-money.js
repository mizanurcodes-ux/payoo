document.getElementById("transfer-money-btn").addEventListener("click",function(){
    const transferMoneyNumber = getValueFromInput("transfer-money-number")
      if(transferMoneyNumber.length !=11){
        alert("invalid transfer money number")
        return
      }



    const transferMoneyAmount = getValueFromInput("transfer-money-amount")


    const currantBalance = getBalance ()
    const newBalance = currantBalance - transferMoneyAmount
    console.log(newBalance);
    
   if(newBalance<0){
    alert(`Add Money Success from ${bankAccount} at ${new Date()}`);
        setBalance(newBalance)
   }
   

   const pin = getValueFromInput("transfer-money-pin");
   if(pin === "1234"){
   alert("Cashout Successfull");
    setBalance(newBalance);
  }
   else{
    alert("invalid Pin")
   }
})

