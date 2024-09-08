let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');

function getComputerChoice() {
  const choices = ['r', 'p', 's'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertToWord(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  return "Scissors";
}

function win(user, computer) {
  const userChoice_div = document.getElementById(user);
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `Computer chose ${convertToWord(computer)}, You win!`
  result_p.style.color = 'green';
  userChoice_div.classList.add('green-glow');
  setTimeout(() => {
    userChoice_div.classList.remove('green-glow');
  }, 300);
}
function lose(user, computer) {
  const userChoice_div = document.getElementById(user);
  computerScore++;
  computerScore_span.innerHTML = computerScore;
  userScore_span.innerHTML = userScore;
  result_p.innerHTML = `Computer chose ${convertToWord(computer)}, You lose!`
  result_p.style.color = 'gray';
  userChoice_div.classList.add('red-glow');
  setTimeout(() => {
    userChoice_div.classList.remove('red-glow');
  }, 300);
}
function draw(user, computer) {
  const userChoice_div = document.getElementById(user);
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `Computer chose ${convertToWord(computer)}, draw!`
  result_p.style.color = '#e5e5e5';
  userChoice_div.classList.add('gray-glow');
  setTimeout(() => {
    userChoice_div.classList.remove('gray-glow');
  }, 300);
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case 'rs':
    case 'pr':
    case 'sp':
      win(userChoice, computerChoice);
      break;
    case 'rp':
    case 'ps':
    case 'sr':
      lose(userChoice, computerChoice);
      break;
    case 'rr':
    case 'pp':
    case 'ss':
      draw(userChoice, computerChoice);
      break;
  }
}
function main() {
  rock_div.addEventListener('click', () => game('r'));
  paper_div.addEventListener('click', () => game('p'));
  scissors_div.addEventListener('click', () => game('s'));
}

main();
