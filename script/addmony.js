document.getElementById("add-mony-btn").addEventListener("click",function(){
    //1 -banck account get
   const bankAccount = getValueFromInput("add-mony-bank");
   if(bankAccount =="Select A Bank"){
    alert("Please select a bank")
    return
   }
    //2 -get bank account number
    const accon =getValueFromInput("add-mony-number");
    if(accon.length !=11){
        alert("invalid acc no")
        return
    }
    //3 - get ammount
    const amount = getValueFromInput("add-mony-amount")
    const currantBalance = getBalance()
    const newBalance = currantBalance + Number(amount)
    
    const pin = getValueFromInput("add-mony-pin")
    if(pin === "1234"){
        alert(`Add Money Success from
             ${bankAccount} 
             at ${new Date()}`)
        setBalance(newBalance)
        //1 ceatch the history contener 
        const history = document.getElementById("history-container")
        //2 new div create korbo 
        const newHistory = document.createElement("div")
        //3 new div innerHTML add korbo
        newHistory.innerHTML = `
         <div class="transaction-card p-5 bg-base-100" >
            Add Money Success from
             ${bankAccount} ,acc-no $(accon) at ${new Date()}  
        </div>
        ` 
        //4 history container a newDiv append korbo
     history.append(newHistory)

    }
    else{
     alert("invalid pin");   
     return
    }
})