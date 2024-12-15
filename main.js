// JavaScript function for game search functionality
function searchGames() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const games = document.querySelectorAll('.game-card');
    games.forEach(game => {
        const title = game.querySelector('h3').textContent.toLowerCase();
        if (title.includes(input)) {
            game.style.display = 'block';
        } else {
            game.style.display = 'none';
        }
    });
}

// JavaScript function to display a game
function showGame(gameUrl) {
    window.location.href = gameUrl; // Redirects to the game's URL
}
