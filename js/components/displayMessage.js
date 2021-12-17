export default function displayMessage(messageType, message, targetElement) {
    const element = document.querySelector(targetElement);

    element.innerHTML = `<div class="alert ${messageType} my-3">${message}</div>`;
}