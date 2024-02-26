import emailjs from 'emailjs-com';

interface FormData {
    name: string;
    email: string;
    message: string;
}

interface ContactControl {
    element: HTMLInputElement | HTMLTextAreaElement;
    errorMessage: string;
    emailValidation?: string;
}

const contactControls: ContactControl[] = [
    { element: document.getElementById('name') as HTMLInputElement, errorMessage: 'Name is required' },
    { element: document.getElementById('email') as HTMLInputElement, errorMessage: 'Email is required', emailValidation: 'Invalid email address' },
    { element: document.getElementById('message') as HTMLTextAreaElement, errorMessage: 'Message is required' }
];

function createErrorMessage(text: string): HTMLElement {
    const errorMessageElement = document.createElement('span');
    errorMessageElement.className = 'error_message';
    errorMessageElement.textContent = text;
    return errorMessageElement;
}

function createErrorIcon(svgContent: string): HTMLElement {
    const iconElement = document.createElement('div');
    iconElement.className = 'error_icon';
    iconElement.innerHTML = svgContent; 
    return iconElement;
}

function createSuccessMessage(text: string): HTMLElement {
    const successMessageElement = document.createElement('span');
    successMessageElement.className = 'success_message';
    successMessageElement.textContent = text;
    return successMessageElement;
}

function isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return /\S+@\S+\.\S+/.test(email);
}

window.onload = function () {
    document.getElementById('form').addEventListener('submit', function (e) {
        e.preventDefault();
        document.getElementById('loadingIndicator').style.display = 'block';
        document.querySelectorAll('.error_message').forEach(message => message.remove());
        document.querySelectorAll('.error_icon').forEach(icon => icon.remove());

        let formData: FormData = {
            name: (document.getElementById('name') as HTMLInputElement).value,
            email: (document.getElementById('email') as HTMLInputElement).value,
            message: (document.getElementById('message') as HTMLTextAreaElement).value
        };

        let isFormValid = true;

        contactControls.forEach(({ element, errorMessage, emailValidation }) => {
            const value = element.value.trim();
            if (value === "") {
                const errorMessageElement = createErrorMessage(errorMessage);
                element.parentNode.appendChild(errorMessageElement);
                element.style.borderBottom = '1px solid hsl(354, 100%, 66%)';
                const iconElement = createErrorIcon(svgContent);
                element.parentNode.appendChild(iconElement);
                isFormValid = false;
            } else if (emailValidation && !isValidEmail(value)) {
                const errorMessageElement = createErrorMessage(emailValidation);
                element.parentNode.appendChild(errorMessageElement);
                element.style.borderBottom = '1px solid hsl(354, 100%, 66%)';
                const iconElement = createErrorIcon(svgContent);
                element.parentNode.appendChild(iconElement);
                isFormValid = false;
            } else {
                element.style.borderBottom = '';
            }
        });

        if (isFormValid) {
            emailjs.sendForm('service_6wiwrke', 'template_u5lxx35', this as HTMLFormElement)
                .then(function () {
                    console.log(formData);
                    console.log('SUCCESS!');
                    (document.getElementById('form') as HTMLFormElement).reset();
                    const succcessMessageElement = createSuccessMessage(formSuccessfulMessage);
                    const textareaControlContainer = document.getElementById('textareaControlContainer');
                    if (textareaControlContainer) {
                        textareaControlContainer.appendChild(succcessMessageElement);
                    }
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
