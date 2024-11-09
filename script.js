const giftBox = document.getElementById('gift-box');
const lettersContainer = document.getElementById('letters-container');
const messages = [
  "Dear John, wishing you...", "Hello! This is a message from...", 
  "To a special friend...", "Warmest regards on...", 
  "Just a note to say...", "Thinking of you and...", 
  "Hello! A quick update...", "You are amazing because...", 
  "Greetings from across...", "A heartfelt thank you...", 
  "Best wishes for your...", "Hey there! Missing you...", 
  "Congratulations on your...", "A note of appreciation...", 
  "Sending positive vibes...", "Just a reminder that...", 
  "A surprise message just...", "Thank you for all that...", 
  "Celebrating you today and..."
];

let currentPage = 0;
const cardsPerPage = 6;

// Function to create a single letter card
function createLetterCard(index) {
  const letter = document.createElement('div');
  letter.classList.add('letter');

  // Front side of the card (number)
  const front = document.createElement('div');
  front.classList.add('face', 'front');
  front.innerText = index + 1;

  // Back side of the card (message)
  const back = document.createElement('div');
  back.classList.add('face', 'back');
  back.innerText = messages[index];

  // Add front and back to the letter card
  letter.appendChild(front);
  letter.appendChild(back);

  // Add event listener to toggle reveal
  letter.addEventListener('click', () => {
    letter.classList.toggle('revealed');
  });

  return letter;
}

// Function to display the current page of cards
function displayPage() {
  lettersContainer.innerHTML = '';
  const start = currentPage * cardsPerPage;
  const end = Math.min(start + cardsPerPage, messages.length);

  for (let i = start; i < end; i++) {
    const letterCard = createLetterCard(i);
    lettersContainer.appendChild(letterCard);
  }
}

// Show the gift box on click
giftBox.addEventListener('click', () => {
  lettersContainer.style.display = 'grid';
  giftBox.style.display = 'none';
  displayPage();
});

