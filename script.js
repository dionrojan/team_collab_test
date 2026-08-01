document.addEventListener('DOMContentLoaded', () => {
    const exploreBtn = document.getElementById('exploreBtn');
    const portfoliosSection = document.getElementById('portfolios');

    // Handle "Meet the Team" button click
    if (exploreBtn && portfoliosSection) {
        exploreBtn.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Show portfolios section
            portfoliosSection.classList.remove('hidden');
            
            // Smooth scroll down to it
            setTimeout(() => {
                portfoliosSection.scrollIntoView({ behavior: 'smooth' });
            }, 50);
        });
    }

    // Add mouse tracking effect for glass panels (interactive highlight)
    const cards = document.querySelectorAll('.glass-panel');
    cards.forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });
});
