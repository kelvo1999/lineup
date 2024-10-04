const players = document.querySelectorAll('.players .player');
const subs = document.querySelectorAll('.subs .player');

// Animate starting XI
players.forEach((player, index) => {
    setTimeout(() => {
        player.classList.add('show');
    }, index * 800); // Staggered entrance for starters
});

// Animate substitutes after starters
subs.forEach((sub, index) => {
    setTimeout(() => {
        sub.classList.add('show');
    }, (players.length * 800) + (index * 500)); // After starters
});
