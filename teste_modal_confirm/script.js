const button = document.getElementById('submit-form-contact') 

button.addEventListener('click', () => {
    event.preventDefault();

    const username = document.getElementById('name0')
    const emailConfirm = document.getElementById('email0')
    const phoneConfirm = document.getElementById('phone_number0')

    if (username.value == '' ) {
        username.classList.add("error-input");
    }

    if (emailConfirm.value == '' ) {
        emailConfirm.classList.add("error-input");
    }

    if (phoneConfirm.value == '' ) {
        phoneConfirm.classList.add("error-input");
    }

    if (!this.form.checkbox.checked) {
        checkbox.classList.add("error-input");
    }
});





