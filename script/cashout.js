//short 

document.getElementById("cashout-btn").addEventListener("click", function(){
  //1
  const cashoutNumbe = getValueFromInput ("cashout-number");
     if(cashoutNumbe.length !=11){
      alert("invalid Number")
      return
     }
 
  //2
  const cashoutAmount = getValueFromInput ("cashout-amount")
  //3
   ///const balanceElemant =document.getElementById("balance");
   ///const balance = balanceElemant.innerText
   ///console.log(balance);
  //4
  const currentBalance = getBalance()
  const newBalance = currentBalance - Number(cashoutAmount)
  console.log(newBalance);
  if(newBalance < 0){
    alert("invalid Amount")
    return;
  }
  const pin =  getValueFromInput ("cashout-pin");
  if(pin ===  "1234"){
    alert("Cashout Successfull");
    setBalance(newBalance);
  }
  else{
    alert("invalid Pin")
  }
})






//document.getElementById("cashout-btn").addEventListener("click", function(){
//  //1-get the agent number & validate
//
//  const cashoutNumberInput = document.getElementById("cashout-number");
//  const  cashoutNumber = cashoutNumberInput.value ;
//  console.log(cashoutNumber);
//  if(cashoutNumber.langth !=11){
//    alert("Invalid agent numbeer")
//    return;
//  }
//  //2-get the amount ,validate ,convert to number
//  const cashoutAmountInput = document.getElementById("cashout-amount");
//  const cashoutAmount= cashoutAmountInput.value;
//  console.log(cashoutAmount);
//  //3-get the current balance ,validate ,convert to number
//  const balanceElemant =document.getElementById("balance");
//  const balance = balanceElemant.innerText
//  console.log(balance);
//
//  //4-calculate new Balance
//
//  const newbalance = Number(balance) - Number(cashoutAmount)
//
//  if(newbalance <0){
//    alert("Invalid Amount")
//    return
//  }
// 
//
//  //5-get the pin and verify
//  const cashoutPinInput = document.getElementById("cashout-pin")
//  const pin = cashoutPinInput.value;
//   if(pin==="123"){
//    alert("ceshout Susessfull")
// console.log(newbalance);
// balanceElemant.innerText = newbalance;
//      //5.1 true :: show amd alert > set balance
//   }
//   else{
//    //5.2 false :: show amd alert > return
//    alert("invalid pin")
//    return
//   }
//  
//
//})