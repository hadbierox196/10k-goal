// Sample player list (values are placeholders)
const players = [
    { name: 'Cristiano Ronaldo', value: 915 },
    { name: 'Lionel Messi', value: 850 },
    { name: 'Pelé', value: 762 },
    { name: 'Romário', value: 756 },
    { name: 'Ferenc Puskás', value: 725 },
    { name: 'Josef Bican', value: 722 },
    { name: 'Robert Lewandowski', value: 653 },
    { name: 'Gerd Müller', value: 634 },
    { name: 'Joe Bambrick', value: 626 },
    { name: 'Luis Suárez', value: 583 }
];

// Section multipliers
const sectionMultipliers = {
    career: 1,
    double: 2,
    triple: 3,
    quad: 4,
    xfive: 5
};

// Variable to track total score
let totalScore = 0;
let currentPlayerIndex = 0;

// Start the game
document.getElementById('start-btn').addEventListener('click', () => {
    totalScore = 0; // Reset score
    currentPlayerIndex = 0; // Reset player index
    document.getElementById('score').innerText = `Current Score: ${totalScore}`;
    displayPlayer();
});

// Display the current player
function displayPlayer() {
    const playerDisplay = document.getElementById('player-display');
    playerDisplay.innerHTML = ''; // Clear previous player
    if (currentPlayerIndex < players.length) {
        const player = players[currentPlayerIndex];
        const playerDiv = document.createElement('div');
        playerDiv.classList.add('player');
        playerDiv.textContent = `${player.name} - Value: ${player.value}`;
        playerDisplay.appendChild(playerDiv);
    } else {
        alert("Game Over! Your total score is: " + totalScore);
    }
}

// Handle the click event on each section
function handleClick(e) {
    const section = e.target;
    const player = players[currentPlayerIndex];

    // Get section type by splitting the section ID at '-'
    const sectionId = section.id.split('-')[0];  // career, double, triple, quad, xfive

    // Ensure the section type has a valid multiplier
    const multiplier = sectionMultipliers[sectionId];
    if (!multiplier) {
        console.error(`Invalid section type: ${sectionId}`);
        return;  // Exit if the multiplier is invalid
    }

    // Calculate the score
    const score = player.value * multiplier;
    
    if (isNaN(score) || score <= 0) {
        console.error('Invalid score calculation', score);
        return; // Exit if the score is invalid
    }

    // Add the score to the total score
    totalScore += score;

    // Display the player's name and score in the clicked section
    section.innerHTML = `<p>${player.name} - Goal: ${score}</p>`;
    document.getElementById('score').innerText = `Current Score: ${totalScore}`;

    // Move to the next player
    currentPlayerIndex++;
    displayPlayer();
}

// Add event listeners to all sections
const sections = document.querySelectorAll('.section');
sections.forEach(section => {
    section.addEventListener('click', handleClick);
});

// Debugging: Log when sections are clicked and what section is selected
sections.forEach(section => {
    section.addEventListener('click', () => {
        console.log(`Section clicked: ${section.id}`);
    });
});
