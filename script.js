// Sample player list (values are placeholders)
const players = [
  { name: 'Cristiano Ronaldo', value: 924 },
  { "name": "Lionel Messi", "value": 850 },
  { "name": "Pelé", "value": 762 },
  { "name": "Romário", "value": 756 },
  { "name": "Ferenc Puskás", "value": 725 },
  { "name": "Josef Bican", "value": 722 },
  { "name": "Jimmy Jones", "value": 639 },
  { "name": "Gerd Müller", "value": 634 },
  { "name": "Joe Bambrick", "value": 626 },
  { "name": "Abe Lenstra", "value": 624 },
  { "name": "Eusébio", "value": 578 },
  { "name": "Fernando Peyroteo", "value": 544 },
  { "name": "Zlatan Ibrahimović", "value": 561 },
  { "name": "Luis Suárez", "value": 557 }
  { "name": "Imre Schlosser", "value": 611 },
  { "name": "Jimmy McGrory", "value": 550 },
  { "name": "Uwe Seeler", "value": 545 },
  { "name": "Alfredo Di Stéfano", "value": 530 },
  { "name": "Gyula Zsengellér", "value": 522 }, 
  { name: 'Robert Lewandowski', value: 710 },
  { name: 'Ronald Koeman', value: 253 },
  { name: 'Juninho Pernambucano', value: 77 },
  { name: 'Franz Beckenbauer', value: 109 },
  { name: 'Cafu', value: 29 },
  { name: 'Bobby Charlton', value: 249 },
  { name: 'David Beckham', value: 114 },
  { name: 'Zinedine Zidane', value: 126 },
  { name: 'Michel Platini', value: 104 },
  { name: 'Patrick Vieira', value: 74 },
  { name: 'Paul Scholes', value: 155 },
  { name: 'Gerard Piqué', value: 57 },
  { name: 'John Terry', value: 67 },
  { name: 'Philipp Lahm', value: 25 },
  { name: 'Sergio Ramos', value: 129 },
  { name: 'Andrea Pirlo', value: 72 },
  { name: 'Claude Makélélé', value: 50 },
  { name: 'Dennis Bergkamp', value: 145 },
  { name: 'Javi Hernández', value: 58 },
  { name: 'Yaya Touré', value: 79 },
  { name: 'Bastian Schweinsteiger', value: 71 },
  { name: 'Marcelo', value: 38 },
  { name: 'Dani Alves', value: 40 },
  { name: 'Ashley Cole', value: 19 },
  { name: 'Paolo Maldini', value: 40 },
  { name: 'Gary Neville', value: 7 },
  { name: 'Virgil van Dijk', value: 35 },
  { name: 'Diego Maradona', value: 259 },
  { name: 'Frank Lampard', value: 273 },
  { name: 'Steven Gerrard', value: 185 },
  { name: 'Lothar Matthäus', value: 171 },
  { name: 'Carlos Alberto Torres', value: 52 },
  { name: 'Rui Costa', value: 86 },
  { name: 'Luis Suárez Miramontes', value: 131 },
  { name: 'Jean Tigana', value: 34 },
  { name: 'Fernando Hierro', value: 127 },
  { name: 'Clarence Seedorf', value: 161 },
  { name: 'Johan Cruyff', value: 301 },
  { name: 'Gennaro Gattuso', value: 40 },
  { name: 'Michel González', value: 46 },
  { name: 'Ivan Rakitić', value: 69 },
  { name: 'Gareth Bale', value: 185 },
  { name: 'Héctor Bellerín', value: 10 },
  { name: 'Ricardo Carvalho', value: 27 },
  { name: 'Fabio Cannavaro', value: 14 },
  { name: 'Kévin Gameiro', value: 132 },
  { name: 'Andrea Barzagli', value: 19 },
  { name: 'David Alaba', value: 43 },
  { name: 'Vincent Kompany', value: 48 },
  { name: 'Raphaël Varane', value: 24 },
  { name: 'Benjamin Pavard', value: 26 },
  { name: 'João Moutinho', value: 39 },
  { name: 'Toni Kroos', value: 92 },
  { name: 'James Rodríguez', value: 108 },
  { name: 'N’Golo Kanté', value: 34 },
  { name: 'Sami Khedira', value: 77 },
  { name: 'Xavi Hernández', value: 85 },
  { name: 'Cesc Fàbregas', value: 112 },
  { name: 'Fernando Gago', value: 16 },
  { name: 'Riccardo Montolivo', value: 18 },
  { name: 'Sergio Busquets', value: 38 },
  { name: 'Jordi Alba', value: 28 },
  { name: 'Marcelo Brozović', value: 52 },
  { name: 'Jack Wilshere', value: 31 },
  { name: 'Andrés Iniesta', value: 58 },
  { name: 'Juan Mata', value: 52 },
];

// Section multipliers
const sectionMultipliers = {
  career: 1,
  double: 2,
  triple: 3,
  quad: 4,
  xfive: 5
};

// Variable to track total score and the number of players played
let totalScore = 0;
let currentPlayerIndex = 0;
let playersPlayed = 0; // Counter to track how many players have been played

// Shuffle the players array to randomize the order
function shufflePlayers() {
  for (let i = players.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [players[i], players[j]] = [players[j], players[i]];
  }
}

// Start the game
document.getElementById('start-btn').addEventListener('click', () => {
  totalScore = 0; // Reset score
  playersPlayed = 0; // Reset players counter
  shufflePlayers(); // Shuffle players to randomize the order
  currentPlayerIndex = 0; // Reset player index
  document.getElementById('score').innerText = `Current Score: ${totalScore}`;
  displayPlayer();
});

// Display the current player
function displayPlayer() {
  const playerDisplay = document.getElementById('player-display');
  playerDisplay.innerHTML = ''; // Clear previous player
  if (currentPlayerIndex < players.length && playersPlayed < 10) {
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
  playersPlayed++; // Increment players counter
  displayPlayer();

  // Stop the game if 10 players have been played
  if (playersPlayed >= 10) {
    alert("Game Over! You've played 10 players!");
  }
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
