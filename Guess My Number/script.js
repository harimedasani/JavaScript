'use strict';

// Generate a random number between 1 and 20
let secretNumber = generateSecretNumber();
let score = 20;
let highScore = 0;

// Function to generate a secret number
function generateSecretNumber() {
  return Math.trunc(Math.random() * 20) + 1;
}

// Function to display a message
function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

// Function to update the score
function updateScore(newScore) {
  score = newScore;
  document.querySelector('.score').textContent = score;
}

// Function to reset the game
function resetGame() {
  score = 20;
  secretNumber = generateSecretNumber();
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
}

// Event listener for the "Check" button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('Wrong Guess');
  } else if (guess === secretNumber) {
    displayMessage('Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
      updateScore(score - 1);
    } else {
      displayMessage('You lost the game!');
      updateScore(0);
    }
  }
});

// Event listener for the "Again" button
document.querySelector('.again').addEventListener('click', resetGame);
