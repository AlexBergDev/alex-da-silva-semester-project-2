export default function displayMessage(messageType, message, targetElement) {
    const element = document.querySelector(targetElement);

    element.innerHTML = `<div class="alert ${messageType} mt-3">${message}</div>`;
}