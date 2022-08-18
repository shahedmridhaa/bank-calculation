document.getElementById('btn-submit').addEventListener('click', function(){
    const emailInput = document.getElementById('input-email');
    const emailInputValue = emailInput.value;
    
    const passwordInput = document.getElementById('input-pass');
    const passwordInputValue = passwordInput.value;

    if(emailInputValue === 'shahed@gmail.com' && passwordInputValue === 'shahed'){
        window.location.href = 'bank.html'
    }else{
        alert('You are not a baper cele')
    }
})