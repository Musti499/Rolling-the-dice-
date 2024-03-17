
const scoreEL = document.querySelectorAll('.score');
const diceEl = document.querySelector('.dice');
const rollDiceBtn = document.querySelector('.btn--roll');
const holdDiceBtn = document.querySelector('.btn--hold');
const player0EL = document.querySelector('.player--0');
const player1EL = document.querySelector('.player--1');
const buttonnew = document.querySelector('.btn--new');
const currentscore = document.querySelector('.current-score');


let score = 0;
let activePlayer = 0;
let finalScore = [0, 0];


scoreEL[0].textContent = '0';
scoreEL[1].textContent = '0';
diceEl.classList.add('hidden');


rollDiceBtn.addEventListener('click', function () {
  
  const randomNum = Math.floor(Math.random() * 6) + 1;
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${randomNum}.png`;
  
  score += randomNum;
  
  document.querySelector(`#current--${activePlayer}`).textContent = score;
 
  if (randomNum === 1) {
    swapPlayer();
  }
});


holdDiceBtn.addEventListener('click', function () {
  
  finalScore[activePlayer] += score; // its formed within an array therefore what the active player gets 
  document.querySelector(`#score--${activePlayer}`).textContent =
    finalScore[activePlayer];
  swapPlayer();
  
});

const swapPlayer = function (){ {
 score = 0 
  document.querySelector(`#current--${activePlayer}`).textContent = '0';
  activePlayer = activePlayer === 0 ? 1 : 0; // if the the statment is true it would return 1 if not then it would return 0 
  player0EL.classList.toggle('player--active'); 
  player1EL.classList.toggle('player--active');
};
 

}
buttonnew.addEventListener('click', function() {
  scoreEL[0].textContent = "0";
  scoreEL[1].textContent = "0";
  diceEl.classList.add("hidden")
  player1EL.classList.remove("player--active")
  player0EL.classList.add("player--active")
  activePlayer = 0
  currentscore.textContent = "0"
  score = 0
  finalScore = [0, 0]


  



  
})






 






