const giftBox = document.getElementById('gift-box');
const lettersContainer = document.getElementById('letters-container');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
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
const cardsPerPage = 10;

// Function to create a single card element
function createLetterCard(index) {
  const letter = document.createElement('div');
  letter.classList.add('letter');

  // Front of the card (number)
  const front = document.createElement('div');
  front.classList.add('face', 'front');
  front.innerText = index + 1;

  // Back of the card (message)
  const back = document.createElement('div');
  back.classList.add('face', 'back');
  back.innerText = messages[index];

  // Add front and back to the letter div
  letter.appendChild(front);
  letter.appendChild(back);

  // Event listener to reveal message on click
  letter.addEventListener('click', () => {
    letter.classList.toggle('revealed');
  });

  return letter;
}

// Function to display cards for the current page
function displayPage() {
  lettersContainer.innerHTML = '';
  const start = currentPage * cardsPerPage;
  const end = Math.min(start + cardsPerPage, messages.length);

  for (let i = start; i < end; i++) {
    const letterCard = createLetterCard(i);
    lettersContainer.appendChild(letterCard);
  }

  // Update button states
  prevButton.disabled = currentPage === 0;
  nextButton.disabled = end >= messages.length;
}

// Show letters when gift box is clicked or touched
function showLetters() {
  lettersContainer.style.display = 'grid';
  document.querySelector('.pagination').style.display = 'flex';
  giftBox.style.display = 'none';
  displayPage();
}

giftBox.addEventListener('click', showLetters);
giftBox.addEventListener('touchstart', showLetters);

// Pagination controls
nextButton.addEventListener('click', () => {
  if ((currentPage + 1) * cardsPerPage < messages.length) {
    currentPage++;
    displayPage();
  }
});

prevButton.addEventListener('click', () => {
  if (currentPage > 0) {
    currentPage--;
    displayPage();
  }
});
