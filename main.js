const popup = document.querySelector('.cookies');
const acceptBtn = document.querySelector('.accept-btn');
const consent = localStorage.getItem("cookieConsent");

if (consent === "accepted") {
    popup.classList.add('hide');
}

acceptBtn.addEventListener('click', () => {
    popup.classList.add('hide');
    localStorage.setItem("cookieConsent", "accepted");
});

// KOLOM KOMENTAR
const inputText = document.getElementById('input-text');
const counter = document.getElementById('counter');
const maxChars = 100;

inputText.addEventListener('input', () => {
    const textLength = inputText.value.length;
    
    if (textLength > maxChars) {
        counter.classList.add('limit-hit');
        inputText.classList.add('limit-hit');
        inputText.value = inputText.value.substring(0, maxChars);
        counter.textContent = `${textLength - 1}/${maxChars}`;
    } else {
        counter.classList.remove('limit-hit');
        inputText.classList.remove('limit-hit');
        counter.textContent = `${textLength}/${maxChars}`;
    }
});