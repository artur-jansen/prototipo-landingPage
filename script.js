let currentIndex = 0;

function moveCarousel(direction) {
    const carousel = document.querySelector('.carousel');
    const cards = document.querySelectorAll('.carousel-card');
    const totalCards = cards.length;
    const cardWidth = cards[0].offsetWidth + 20; // card width + margin

    // Calculate the number of visible cards
    const visibleCards = window.innerWidth > 768 ? 3 : 1;

    // Calculate the maximum index
    const maxIndex = totalCards - visibleCards;

    // Update the current index
    currentIndex += direction;

    // Ensure the current index is within bounds
    if (currentIndex < 0) {
        currentIndex = 0;
    } else if (currentIndex > maxIndex) {
        currentIndex = maxIndex;
    }

    // Move the carousel
    carousel.style.transform = `translateX(${-currentIndex * cardWidth}px)`;
}