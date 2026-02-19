
//machinn id -> input
function getValueFromInput (id) {
 const input = document.getElementById(id)
 const value =input.value;
 console.log(id , value);
 return value;
}

//maction

function getBalance (){
    const balanceElemant =document.getElementById("balance")
    const balance = balanceElemant.innerText;
    console.log("currant balance" ,balance);
    return Number(balance)
}

//set balance
function setBalance(value){
     const balanceElemant =document.getElementById("balance")
     balanceElemant.innerText=value;
}

// id > hide all >show id

function showOnly (id){
    const addMony = document.getElementById("add-mony")
    const cashout = document.getElementById("cashout")
    const transfer = document.getElementById("transfer-money")

    //all id hide
    addMony.classList.add("hidden")
    cashout.classList.add("hidden")
    transfer.classList.add("hidden")

    //show the id element
    const selected = document.getElementById(id)
    selected.classList.remove("hidden")
}




