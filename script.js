const openMenu = document.getElementById('openMenu');
const closeMenu = document.getElementById('closeMenu');
const menuContainer = document.getElementById('menuContainer');

function toggleMenu() {
    if (menuContainer.style.display === 'none' || menuContainer.style.display === '') {
        menuContainer.style.display = 'block';
        closeMenu.style.display = 'block';
        openMenu.style.display = 'none';
    } else {
        menuContainer.style.display = 'none';
        closeMenu.style.display = 'none';
        openMenu.style.display = 'block';
    }
}

openMenu.addEventListener('click', (e) => {
    e.preventDefault();
    toggleMenu();
})

closeMenu.addEventListener('click', (e) => {
    e.preventDefault();
    toggleMenu();
})

const form = document.getElementById('form');
const contactControls = [
    { element: document.getElementById('name'), errorMessage: 'Name cannot be empty' },
    { element: document.getElementById('email'), errorMessage: 'Email cannot be empty', emailValidation: 'Please provide a valid email address' },
    { element: document.getElementById('message'), errorMessage: 'Please enter a message' }
];

const svgContent = `<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle fill="#FF7979" cx="12" cy="12" r="12"/><rect fill="#FFF" x="11" y="6" width="2" height="9" rx="1"/><rect fill="#FFF" x="11" y="17" width="2" height="2" rx="1"/></g></svg>`;

const formSuccessfulMessage = "Your form has been submitted successfully.";
const textareaControlContainer = document.getElementById('textareaControlContainer');

function createErrorMessage(message) {
    const errorMessage = document.createElement('p');
    errorMessage.textContent = message;
    errorMessage.classList.add('error_message');
    return errorMessage;
}

function creatErrorIcon(icon) {
    const errorIcon = document.createElement('span');
    errorIcon.classList.add('error_icon');
    errorIcon.innerHTML = icon;
    return errorIcon;
}

function createSuccessMessage(message) {
    const successMessage = document.createElement('p');
    successMessage.textContent = message;
    successMessage.classList.add('success_message');
    return successMessage;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return emailRegex.test(email);
}

function clearSuccessMessage() {
    const successMessage = document.querySelector('.success_message');
    if (successMessage) {
        successMessage.remove();
    }
}
function clearMessagesOnFocus(element) {
    element.addEventListener('focus', () => {
        const errorMessage = element.parentNode.querySelector('.error_message');
        if (errorMessage) {
            errorMessage.remove();
        }

        const errorIcon = element.parentNode.querySelector('.error_icon');
        if (errorIcon) {
            errorIcon.remove();
        }
        element.style.borderBottom = '';
        clearSuccessMessage();
    })
}

contactControls.forEach(({ element }) => {
    clearMessagesOnFocus(element);
});



