document.getElementById('withdrow-btn').addEventListener('click', function(){
    const withdrowInput = getInputValueById('withdrow-input')
    const Prevwithdrow = getElementValueById('total-withdrow')

    const totalWithdrow = Prevwithdrow + withdrowInput;
    setElementValueById('total-withdrow', totalWithdrow)

    const totalbaence = getElementValueById('total-balence')
    const currentBalence = totalbaence - withdrowInput;

    setElementValueById('total-balence', currentBalence)
})