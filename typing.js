const texts = ["Web", "Freelancer", "Autodidata"];
const typingSpeed = 100; // Velocidade para digitar cada letra (ms)
const deletingSpeed = 50; // Velocidade para deletar cada letra (ms)
const delayBetweenTexts = 1000; // Pausa antes de apagar ou mudar o texto (ms)
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingElement = document.getElementById("typing-text");

function typeText() {
    const currentText = texts[textIndex];
    if (isDeleting) {
        charIndex--;
        typingElement.textContent = currentText.substring(0, charIndex);
    } else {
        charIndex++;
        typingElement.textContent = currentText.substring(0, charIndex);
    }

    let timeout = isDeleting ? deletingSpeed : typingSpeed;

    if (!isDeleting && charIndex === currentText.length) {
        timeout = delayBetweenTexts;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
    }

    setTimeout(typeText, timeout);
}

// Inicia a animação
typeText();
