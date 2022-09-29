
const mailInput = document.getElementById("mail")
const passwordInput = document.getElementById("password")
const button = document.getElementById("s-button")

let storedName = localStorage.getItem('mail');
let storedPw = localStorage.getItem('password');


button.addEventListener("click",() => {
    if(mailInput.value == storedName && passwordInput.value == storedPw){
        alert('You are logged in.');
    }else {
        alert('Error on login!!')
    }
})

