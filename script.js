let score = JSON.parse(localStorage.getItem('score'))||{
  wins: 0,
  losses: 0,
  ties: 0
};
/*if (!score) {
score = {
  wins: 0,
  losses: 0,
  ties: 0
};
}*/

updateScoreElement();

function playGame(playerMove) {
let computerMove = pickComputerMove();

let result = '';
if (playerMove === 'Rock') {
  if (computerMove === 'Rock') {
    result = 'Tie';
  }
  else if (computerMove === 'Paper') {
    result = 'You lose!';
  }
  else if (computerMove === 'Scissor') {
    result = 'You win!';
  }
}

else if (playerMove === 'Paper') {
  if (computerMove === 'Rock') {
    result = 'You win!';
  }
  else if (computerMove === 'Paper') {
    result = 'Tie';
  }
  else if (computerMove === 'Scissor') {
    result = 'You lose!';
  }
}

else if (playerMove === 'Scissor') {
  if (computerMove === 'Rock') {
  result = 'You lose!';
  }
  else if (computerMove === 'Paper') {
    result = 'You win!';
  }
  else if (computerMove === 'Scissor') {
    result = 'Tie';
  } 
}

if (result === 'You win!') {
  score.wins +=1;
} else if (result === 'You lose!') {
  score.losses +=1;
} else if (result === 'Tie') {
  score.ties +=1;
}

localStorage.setItem('score',JSON.stringify(score));

updateScoreElement();

document.querySelector('.js-result')
  .innerHTML = result;

document.querySelector('.js-moves')
  .innerHTML = `You
  <img class="move-icon" src="Images/${playerMove}-emoji.png">
  <img class="move-icon" src="Images/${computerMove}-emoji.png">
  Computer`;
}

function updateScoreElement() {
document.querySelector('.js-score')
  .innerHTML = `wins: ${score.wins}, losses: ${score.losses}, ties: ${score.ties}`;
}

function pickComputerMove() {
const randomNumber = Math.random();
let computerMove = '';
if (randomNumber >= 0 && randomNumber < 1/3) {
  computerMove ='Rock';
}
else if (randomNumber >= 1/3 && randomNumber < 2/3) {
  computerMove ='Paper';
}
else if (randomNumber >= 2/3 && randomNumber < 1) {
  computerMove ='Scissor';
}
return computerMove;
}