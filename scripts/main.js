(function () {
    "use strict";
    const root = document.documentElement;

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        const cardHover = card.querySelector(".card__hover");
    
        card.addEventListener("mouseover", () => {
            cardHover.style.display = 'flex';
        });
    
        card.addEventListener("mouseout", () => {
            cardHover.style.display = 'none';
        });
    });
})();
