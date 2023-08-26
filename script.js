const createAccountBtn = document.querySelector('.create-account');
const inputs = document.querySelectorAll('input')
const passwordAlert = document.querySelector('.password-alert')

inputs.forEach((input) => {
    input.addEventListener('focus', function() {
        this.setAttribute('required', '');
    });
});

createAccountBtn.addEventListener('click', verifyPassword)


function verifyPassword() {
    let password1 = document.getElementById("password1");
    let password2 = document.getElementById("password2");

    if (password1.value !== password2.value) {
        passwordAlert.classList.remove('hidden')
        password1.classList.add('error')
        password2.classList.add('error')
    } else {
        passwordAlert.classList.add('hidden')
        password1.classList.remove('error')
        password2.classList.remove('error')
    }
}