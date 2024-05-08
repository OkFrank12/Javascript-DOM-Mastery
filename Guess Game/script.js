'use strict';

let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
let playing = true;

const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

const changeBgColor = bgClr => {
  document.querySelector('body').style.backgroundColor = bgClr;
};

document.querySelector('.check').addEventListener('click', () => {
  if (playing) {
    const guess = +document.querySelector('.guess').value;

    if (!guess) {
      displayMessage('🚫 No Number!');
    } else if (guess === secretNumber) {
      playing = false;
      displayMessage('🎉 Correct Number!');
      changeBgColor('#60b347');

      document.querySelector('.number').textContent = secretNumber;

      if (score >= highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }
    } else if (guess !== secretNumber) {
      displayMessage(`${guess > secretNumber ? '☝️ Too High' : '👇 Too Low'}`);

      score--;
      document.querySelector('.score').textContent = score;

      if (score < 1) {
        playing = false;
        score = 0;
        document.querySelector('.score').textContent = score;
        displayMessage('💥 Game Over!');
        changeBgColor('crimson');
      }
    }
  }
});

document.querySelector('.again').addEventListener('click', () => {
  playing = true;
  score = 20;
  document.querySelector('.score').textContent = score;
  changeBgColor('#222');
  secretNumber = Math.floor(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  displayMessage('😃 Start guessing...');
});
