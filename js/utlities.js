function getInputValueById (inputId){
    const inputField = document.getElementById(inputId);
    const inputFildValueStr = inputField.value;
    const inputFildValue = parseFloat(inputFildValueStr);
    inputField.value = '';
    return inputFildValue;
}

function getElementValueById(elementId){
    const elementField = document.getElementById(elementId);
    const PrevElementFieldStr = elementField.innerText;
    const PrevElementField = parseFloat(PrevElementFieldStr);
    return PrevElementField;
}

function setElementValueById(element, newValue){
    const textElement = document.getElementById(element);
    textElement.innerText = newValue;
}