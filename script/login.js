document.getElementById("login-btn").addEventListener("click", function () {
   //-get the mobile number

   const numberInput = document.getElementById("input-number");
   const contactNumber = numberInput.value;
   console.log(contactNumber);
   //-get the mobile pin
   const pinInput = document.getElementById("input-pin")
   const pin = pinInput.value;
   console.log(pin);
   // match pin&num
   if(contactNumber === "01820100221" && pin === "1234"){
     // true => alart > homepage
     alert("login Success");
     window.location.assign("/home.html")
   }
   else{
    // false=> alart > return
    alert("login Failed");
    return;

   }
   
   
})