// Message Data
const messages = [
  "Dear John, wishing you a wonderful year ahead!",
  "Hello! This is a message from a special friend.",
  "To a special friend, stay amazing always!",
  "Warmest regards on your special day!",
  "Just a note to say you're awesome!",
  "Thinking of you and wishing you all the best.",
  "Hello! A quick update from me to you.",
  "You are amazing because of your strength and kindness.",
  "Greetings from across the miles!",
  "A heartfelt thank you for being you.",
  "Best wishes for your success in life.",
  "Hey there! Missing our good times together.",
  "Congratulations on your recent achievements!",
  "A note of appreciation for all that you do.",
  "Sending positive vibes your way today.",
  "Just a reminder that you're never alone.",
  "A surprise message just for you!",
  "Thank you for all that you've done for me.",
  "Celebrating you today and always!"
];

// Pagination Variables
let currentPage = 0;
const cardsPerPage = 10;

// Function to create card elements
function createCard(index) {
  const card = document.createElement('div');
  card.classList.add('card');

  // Front of the card (index)
  const front = document.createElement('div');
  front.classList.add('front');
  front.textContent = index + 1;  // Card number

  // Back of the card (message)
  const back = document.createElement('div');
  back.classList.add('back');
  back.textContent = messages[index];

  // Append front and back
  card.appendChild(front);
  card.appendChild(back);

  // Add flip event on click
  card.addEventListener('click', () => {
    card.classList.toggle('flip');
  });

  return card;
}

// Function to render cards for the current page
function renderCards() {
  const cardContainer = document.querySelector('.card-container');
  cardContainer.innerHTML = ''; // Clear previous cards
  const start = currentPage * cardsPerPage;
  const end = Math.min(start + cardsPerPage, messages.length);

  // Create cards for the current page
  for (let i = start; i < end; i++) {
    const card = createCard(i);
    cardContainer.appendChild(card);
  }

  // Update button states
  document.getElementById('prev-button').disabled = currentPage === 0;
  document.getElementById('next-button').disabled = end >= messages.length;
}

// Event listeners for pagination buttons
document.getElementById('next-button').addEventListener('click', () => {
  if ((currentPage + 1) * cardsPerPage < messages.length) {
    currentPage++;
    renderCards();
  }
});

document.getElementById('prev-button').addEventListener('click', () => {
  if (currentPage > 0) {
    currentPage--;
    renderCards();
  }
});

// Initial rendering of cards
renderCards();

