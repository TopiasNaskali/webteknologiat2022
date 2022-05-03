let defaultValue1;
let defaultValue2;


window.onload = function () {
defaultValue1 = Math.floor(Math.random() * 10) +1;
defaultValue2 = Math.floor(Math.random() * 10) +1;
document.getElementById("first-nr").value = defaultValue1;
document.getElementById("second-nr").value = defaultValue2;

}
 function setFirstNr(type) {
    let currentValue = document.getElementById("first-nr").value;

    if (type == 'plus') {
        currentValue = parseInt(currentValue) + 1;
    }
    else {
        currentValue = currentValue - 1;
    }
    document.getElementById("first-nr").value = currentValue;
 }
 function setSecondNr(type) {
    let currentValue = document.getElementById("second-nr").value;

    if (type == 'plus') {
        currentValue = parseInt(currentValue) + 1;
    }
    else {
        currentValue = currentValue - 1;
    }
    document.getElementById("second-nr").value = currentValue;
 }


 function validation1(){
    let check = document.getElementById('first-nr').value;
    if(check == "")
    {
       alert("numero puuttuu!");
    }
}

function validation2(){
   let check = document.getElementById('second-nr').value;
   if(check == "")
   {
      alert("numero puuttuu!");
   }
}
 
 function calculation(){
     validation1();
     validation2();
    let number1 = parseInt(document.getElementById("first-nr").value);
    let number2 = parseInt(document.getElementById("second-nr").value);
    let currentValue;
    let operation = document.getElementById("operationSelect").value;
   
    if (operation == 1) {
         currentValue = number1 + number2;

    }

    if (operation == 2) {
        currentValue = number1 - number2;

    }
    if (operation == 3) {
        currentValue = number1*number2;

    }
    if (operation == 4) {
        currentValue = number1/number2;
        
    }
   
    parseInt(document.getElementById("result").value = currentValue);
 }

