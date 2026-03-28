// Detox & Reset Retreat - Replika
// Skripta za glatko skrolovanje na vrh i animacije

document.addEventListener('DOMContentLoaded', function() {
    // 1. BACK TO TOP BUTTON
    const backToTopBtn = document.querySelector('.back-to-top-btn');
    
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            window.scrollTo({
                top: 0,
                behavior: 'smooth' 
            });
        });
    }

    // 2. SCROLL ANIMATION (SLIDE IN FROM RIGHT)
    const animatedElements = document.querySelectorAll('.slide-in-right');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Dodaje klasu kada element uđe u ekran
                entry.target.classList.add('in-view');
                
                // Opciono: uklanja observer nakon što se jednom animira 
                // observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15 // Aktivira se kad se prikaže 15% elementa
    });

    animatedElements.forEach(el => observer.observe(el));
});