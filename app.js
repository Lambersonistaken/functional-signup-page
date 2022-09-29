
const mailInput = document.getElementById("mail")
const passwordInput = document.getElementById("password")
const button = document.getElementById("s-button")


button.addEventListener("click", () => {
    if(mailInput.value.length == 0 && passwordInput.value.length == 0){
    alert('Please fill in email and password')}
    else {
        localStorage.setItem('mail', mailInput.value);
        localStorage.setItem('password', passwordInput.value);
        alert('Your account has been created');
    }
    
})