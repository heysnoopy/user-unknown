let currentIndex = 0;
const buttons = document.querySelectorAll('.button');

for (let i = 1; i < buttons.length; i++) {
  buttons[i].style.display = 'none';
}

function getRandom() {
    const randomX = Math.floor(Math.random() * 80);
    const randomY = Math.floor(Math.random() * 80);
    return `translate(${randomX}vw, ${randomY}vh)`;
}

function applyRandomTranslation() {
    const buttonContainer = document.getElementById('button-container');
    const randomTranslation = getRandom();
    buttonContainer.style.transform = randomTranslation;
}

function showNext() {
    buttons[currentIndex].style.display = 'none';
    currentIndex = (currentIndex + 1) % buttons.length;
    buttons[currentIndex].style.display = 'block';
        applyRandomTranslation();
}
