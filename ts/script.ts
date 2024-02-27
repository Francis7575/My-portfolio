const openMenu = document.getElementById('openMenu') as HTMLElement;
const closeMenu = document.getElementById('closeMenu') as HTMLElement;
const menuContainer = document.getElementById('menuContainer') as HTMLElement;

function toggleMenu(): void {
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

openMenu.addEventListener('click', (e: MouseEvent) => {
    e.preventDefault();
    toggleMenu();
});

closeMenu.addEventListener('click', (e: MouseEvent) => {
    e.preventDefault();
    toggleMenu();
});

const form = document.getElementById('form') as HTMLFormElement;
const contactControls: { element: HTMLInputElement | HTMLTextAreaElement, errorMessage: string, emailValidation?: string }[] = [
    { element: document.getElementById('name') as HTMLInputElement, errorMessage: 'Name cannot be empty' },
    { element: document.getElementById('email') as HTMLInputElement, errorMessage: 'Email cannot be empty', emailValidation: 'Please provide a valid email address' },
    { element: document.getElementById('message') as HTMLTextAreaElement, errorMessage: 'Please enter a message' }
];

const svgContent = `<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle fill="#FF7979" cx="12" cy="12" r="12"/><rect fill="#FFF" x="11" y="6" width="2" height="9" rx="1"/><rect fill="#FFF" x="11" y="17" width="2" height="2" rx="1"/></g></svg>`;

const formSuccessfulMessage = "Your form has been submitted successfully.";
const textareaControlContainer = document.getElementById('textareaControlContainer') as HTMLDivElement;

function createErrorMessage(message: string): HTMLParagraphElement {
    const errorMessage = document.createElement('p');
    errorMessage.textContent = message;
    errorMessage.classList.add('error_message');
    return errorMessage;
}

function creatErrorIcon(icon: string): HTMLSpanElement {
    const errorIcon = document.createElement('span');
    errorIcon.classList.add('error_icon');
    errorIcon.innerHTML = icon;
    return errorIcon;
}

function createSuccessMessage(message: string): HTMLParagraphElement {
    const successMessage = document.createElement('p');
    successMessage.textContent = message;
    successMessage.classList.add('success_message');
    return successMessage;
}

function isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return emailRegex.test(email);
}

function clearSuccessMessage(): void {
    const successMessage = document.querySelector('.success_message') as HTMLParagraphElement;
    if (successMessage) {
        successMessage.remove();
    }
}
function clearMessagesOnFocus(element: HTMLInputElement | HTMLTextAreaElement): void {
    element.addEventListener('focus', () => {
        if (element.parentNode instanceof HTMLElement) {
            const parentNode = element.parentNode;

            const errorMessage = parentNode.querySelector('.error_message') as HTMLParagraphElement;
            if (errorMessage) {
                errorMessage.remove();
            }

            const errorIcon = parentNode.querySelector('.error_icon') as HTMLSpanElement;
            if (errorIcon) {
                errorIcon.remove();
            }
        }
        
        element.style.borderBottom = '';
        clearSuccessMessage();
    });
}


contactControls.forEach(({ element }) => {
    clearMessagesOnFocus(element);
});
