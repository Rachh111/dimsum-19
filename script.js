// JavaScript to flip the card when a message is clicked

const messages = document.querySelectorAll('.message');

messages.forEach(message => {
    message.addEventListener('click', () => {
        const card = document.querySelector('.card');
        card.style.transform = card.style.transform === "rotateY(180deg)" ? "rotateY(0deg)" : "rotateY(180deg)";
    });
});

