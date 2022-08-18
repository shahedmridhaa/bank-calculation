document.getElementById("deposit-btn").addEventListener("click", function () {
  const newDeposit = getInputValueById("deposit-input");
  const prevElementValue = getElementValueById("deposit-total");

  const newElementValue = newDeposit + prevElementValue;
  setElementValueById("deposit-total", newElementValue);

  const prevdeposit = getElementValueById ('total-balence')
  const newDepostBalence = newDeposit + prevdeposit;
  setElementValueById('total-balence', newDepostBalence) 
  
});
