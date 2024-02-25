(function () {
    emailjs.init('nF50SAzaV0TyTjuGQ');
})();

window.onload = function () {
    document.getElementById('form').addEventListener('submit', function (e) {
        e.preventDefault();
        document.getElementById('loadingIndicator').style.display = 'block';
        document.querySelectorAll('.error_message').forEach(message => message.remove());
        document.querySelectorAll('.error_icon').forEach(icon => icon.remove());

        let formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };

        let isFormValid = true;

        contactControls.forEach(({ element, errorMessage, emailValidation }) => {
            const value = element.value.trim();
            if (value === "") {
                const errorMessageElement = createErrorMessage(errorMessage);
                element.parentNode.appendChild(errorMessageElement);
                element.style.borderBottom = '1px solid hsl(354, 100%, 66%)';
                const iconElement = creatErrorIcon(svgContent);
                element.parentNode.appendChild(iconElement);
                isFormValid = false;
            } else if (emailValidation && !isValidEmail(value)) {
                const errorMessageElement = createErrorMessage(emailValidation);
                element.parentNode.appendChild(errorMessageElement);
                element.style.borderBottom = '1px solid hsl(354, 100%, 66%)';
                const iconElement = creatErrorIcon(svgContent);
                element.parentNode.appendChild(iconElement);
                isFormValid = false;
            } else {
                element.style.borderBottom = '';
            }
        });

        if (isFormValid) {
            emailjs.sendForm('service_6wiwrke', 'template_u5lxx35', this)
                .then(function () {
                    console.log(formData);
                    console.log('SUCCESS!');
                    form.reset();
                    const succcessMessageElement = createSuccessMessage(formSuccessfulMessage);
                    textareaControlContainer.appendChild(succcessMessageElement);
                    document.getElementById('loadingIndicator').style.display = 'none';

                })
                .catch(function (error) {
                    console.log('FAILED...', error);
                    document.getElementById('loadingIndicator').style.display = 'none';
                });
        } else {
            document.querySelectorAll('.success_message').forEach(message => message.remove());
            document.getElementById('loadingIndicator').style.display = 'none';
        }
    });
}
