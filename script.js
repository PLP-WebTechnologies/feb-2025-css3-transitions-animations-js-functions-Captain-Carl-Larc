// script.js

const signupForm = document.getElementById('signupForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const premiumModeCheckbox = document.getElementById('premiumMode');
const registerButton = document.querySelector('.register-button');

const preferencesKey = 'userPreferences';

// Function to store user preferences in localStorage
function storePreferences(email, premiumMode) {
    const preferences = {
        email: email,
        premiumMode: premiumMode
    };
    localStorage.setItem(preferencesKey, JSON.stringify(preferences));
    console.log('Preferences stored:', preferences);
}

// Function to retrieve user preferences from localStorage
function retrievePreferences() {
    const storedPreferences = localStorage.getItem(preferencesKey);
    if (storedPreferences) {
        const preferences = JSON.parse(storedPreferences);
        console.log('Preferences retrieved:', preferences);
        return preferences;
    }
    return null;
}

// Function to handle the form submission
function handleSignup(event) {
    event.preventDefault(); // Prevent the default form submission

    const email = emailInput.value;
    const isPremium = premiumModeCheckbox.checked;

    // Store the preferences
    storePreferences(email, isPremium);

    // You can add more actions here, like displaying a success message
    alert(`Registration successful!\nEmail: ${email}\nMode: ${isPremium ? 'Premium' : 'Free'}`);

    // Optionally, you can add an animation to the button on successful registration
    registerButton.classList.add('animate-success');
    setTimeout(() => {
        registerButton.classList.remove('animate-success');
    }, 1000); // Remove the class after 1 second
}

// Add event listener to the form for submission
signupForm.addEventListener('submit', handleSignup);

// Retrieve preferences when the page loads
const savedPreferences = retrievePreferences();
if (savedPreferences) {
    // You could pre-fill the form or apply styles based on saved preferences
    console.log('Previously saved email:', savedPreferences.email);
    console.log('Previously selected premium mode:', savedPreferences.premiumMode);
    // Example:
    // emailInput.value = savedPreferences.email;
    // premiumModeCheckbox.checked = savedPreferences.premiumMode;
}

// Optional: Add a simple animation to the input fields on focus
emailInput.addEventListener('focus', () => {
    emailInput.style.transform = 'scale(1.02)';
    emailInput.style.borderColor = '#00aaff';
});

emailInput.addEventListener('blur', () => {
    emailInput.style.transform = 'scale(1)';
    emailInput.style.borderColor = '#ddd';
});

passwordInput.addEventListener('focus', () => {
    passwordInput.style.transform = 'scale(1.02)';
    passwordInput.style.borderColor = '#00aaff';
});

passwordInput.addEventListener('blur', () => {
    passwordInput.style.transform = 'scale(1)';
    passwordInput.style.borderColor = '#ddd';
});

// Optional: CSS animation for successful registration button
/* const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = `
@keyframes pulse-success {
    0% { transform: scale(1); background-color: #28a745; }
    50% { transform: scale(1.1); background-color: #218838; }
    100% { transform: scale(1); background-color: #28a745; }
}

.animate-success {
    animation: pulse-success 0.5s ease-in-out;
}
`;
document.head.appendChild(styleSheet); */