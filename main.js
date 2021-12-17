var dateOfBirth = document.querySelector("#date-of-birth");
var luckyNumber = document.querySelector("#lucky-number");
var checkButton = document.querySelector("#check-button");
var outputBox = document.querySelector("#output-box");






function compareValues ( sum,luckyNumber){

    if (sum%luckyNumber === 0 ){
      
        
     outputBox.innerText ="Your  birth Date is lucky 😘😘🕺 "
     outputBox.style.color= "green" 
     
    } else {

        outputBox.innerText="Your  birth Date is not lucky 😓😭"
        outputBox.style.color= "red" 

    }
     

}

function checkBirthDateIsLucky() {
    var dob = dateOfBirth.value;
    var sum = calculateSum(dob);
    if(sum&&dob)
    compareValues(sum,luckyNumber.value)
    else 
    outputBox.innerText="please enter both feilds"

}

function calculateSum(dob) {
    dob= dob.replaceAll("-","");
    let sum  = 0;
    for(let index=0;index<dob.length;index++){
        sum = sum + Number(dob.charAt(index));

    }
    return sum;

}

checkButton.addEventListener("click", checkBirthDateIsLucky);

