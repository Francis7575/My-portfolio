const openMenu = document.getElementById('openMenu') as HTMLElement;
const closeMenu = document.getElementById('closeMenu') as HTMLElement;
const menuContainer = document.getElementById('menuContainer') as HTMLElement;

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

openMenu.addEventListener('click', (e: Event) => {
    e.preventDefault();
    toggleMenu();
})

closeMenu.addEventListener('click', (e: Event) => {
    e.preventDefault();
    toggleMenu();
})

const form = document.getElementById('form') as HTMLFormElement;
const contactControls: { element: HTMLElement, errorMessage: string, emailValidation?: string }[] = [
    { element: document.getElementById('name') as HTMLElement, errorMessage: 'Name cannot be empty' },
    { element: document.getElementById('email') as HTMLElement, errorMessage: 'Email cannot be empty', emailValidation: 'Please provide a valid email address' },
    { element: document.getElementById('message') as HTMLElement, errorMessage: 'Please enter a message' }
];

const svgContent = `<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle fill="#FF7979" cx="12" cy="12" r="12"/><rect fill="#FFF" x="11" y="6" width="2" height="9" rx="1"/><rect fill="#FFF" x="11" y="17" width="2" height="2" rx="1"/></g></svg>`;

const formSuccessfulMessage = "Your form has been submitted successfully.";
const textareaControlContainer = document.getElementById('textareaControlContainer') as HTMLElement;

function createErrorMessage(message: string) {
    const errorMessage = document.createElement('p');
    errorMessage.textContent = message;
    errorMessage.classList.add('error_message');
    return errorMessage;
}

function createErrorIcon(icon: string) {
    const errorIcon = d
