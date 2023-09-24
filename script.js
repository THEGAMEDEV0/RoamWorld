// JavaScript for the image/text carousel
const tourCards = document.querySelectorAll('.tour-card');
let currentIndex = 0;

function showTour(index) {
    tourCards.forEach((card, i) => {
        card.style.display = i === index ? 'block' : 'none';
    });
}

function nextTour() {
    currentIndex = (currentIndex + 1) % tourCards.length;
    showTour(currentIndex);
}

function prevTour() {
    currentIndex = (currentIndex - 1 + tourCards.length) % tourCards.length;
    showTour(currentIndex);
}

// Display the first tour when the page loads
showTour(currentIndex);

// Set up event listeners for next and previous buttons
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');

nextBtn.addEventListener('click', nextTour);
prevBtn.addEventListener('click', prevTour);

// Generate prices for Warsaw and St. Petersburg
function generatePrices() {
    const warsawPrice = "£50.99 PRP";
    const stpetersburgPrice = "£50.99 PRP";

    document.getElementById('warsaw-price').textContent = `From ${warsawPrice}`;
    document.getElementById('stpetersburg-price').textContent = `From ${stpetersburgPrice}`;
}

generatePrices();

