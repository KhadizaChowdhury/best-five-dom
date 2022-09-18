function getInputFieldValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);

    const inputAmountString = inputField.value;
    const inputAmount = parseFloat(inputAmountString);
    // inputField.value = '';
    if(isNaN(inputAmount)){
        alert("Please Enter a valid number!!");
        $( this ).dialog( "close" ); 
    }
    return inputAmount;

}

function getTextValueById(textValueId){
    const prevTextValue = document.getElementById(textValueId);
    const newTextValueString = prevTextValue.innerText;
    const oldTextValue = parseFloat(newTextValueString);
    prevTextValue.innerText = '';

    return oldTextValue;
}

function setTextValueById(textValueId, newtextValue){
    const prevTextValue = document.getElementById(textValueId);
    prevTextValue.innerText = newtextValue;
}


