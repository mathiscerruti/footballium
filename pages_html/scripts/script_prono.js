let score1 = 4;

let guesses1 = document.querySelector('.guesses1');
let lastResult1 = document.querySelector('.lastResult1');
let lowOrHi1 = document.querySelector('.lowOrHi1');

let score2 = 1;

let guesses2 = document.querySelector('.guesses2');
let lastResult2 = document.querySelector('.lastResult2');
let lowOrHi2 = document.querySelector('.lowOrHi2');

let guessSubmit = document.querySelector('.guessSubmit');
let guessField1 = document.querySelector('.guessField1');
let guessField2 = document.querySelector('.guessField2');


let guessCount = 1;
let resetButton;

function checkGuesses(){
  let userGuess1 = Number(guessField1.value);
  let userGuess2 = Number(guessField2.value);
  
  if ((userGuess1 === score1) && (userGuess2 === score2)){
    lastResult1.textContent = 'Vous avez trouvé le bon score !';
    lastResult1.style.backgroundColor = 'green';
    lastResult2.style.backgroundColor = 'white',
    lowOrHi1.textContent = '';
    lowOrHi2.textContent = '',
    setGameOver()
    
  } else if ((userGuess1 === score1) && (userGuess2 !== score2 )) {
    lastResult1.textContent = 'Vous avez le bon nombre pour le Brésil mais pas la Corée !';
    lastResult1.style.backgroundColor = 'green';
    lowOrHi1.textContent = '';
    lastResult2.textContent = 'Faux !';
    lastResult2.style.backgroundColor = 'red';

  } else if ((userGuess1 !== score1) && (userGuess2 === score2 )) {
    lastResult1.textContent = 'Faux !';
    lastResult1.style.backgroundColor = 'red';
    lastResult2.textContent = 'Vous avez le bon nombre pour la Corée mais pas le Brésil !';
    lastResult2.style.backgroundColor = 'green';
    lowOrHi2.textContent = '';
  
  } else {
     lastResult1.textContent = 'Faux !';
     lastResult1.style.backgroundColor = 'red'
     lastResult2.textContent = 'Faux !';
     lastResult2.style.backgroundColor = 'red';
     if (userGuess1 < score1) {
      lowOrHi1.textContent = 'Le nombre saisi pour le Brésil est trop petit !';
     } else if (userGuess1 > score1) {
      lowOrHi1.textContent = 'Le nombre saisi pour le Brésil est trop grand !';
     }
     if (userGuess2 < score2) {
      lowOrHi2.textContent = 'Le nombre saisi pour la Corée est trop petit !';
     } else if (userGuess2 > score2) {
      lowOrHi2.textContent = 'Le nombre saisi pour la Corée est trop grand !';
     }
  }

  guessCount++;
  guessField1.value = '';
  guessField1.focus();
  guessField2.value = '';
  guessField2.focus();
}
guessSubmit.addEventListener('click', checkGuesses);

function setGameOver() {
  guessField1.disabled = true;
  guessField2.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement('button');
  resetButton.textContent = 'Nouvelle partie';
  document.body.appendChild(resetButton);
  resetButton.addEventListener('click', resetGame);
}
function resetGame() {
  guessCount = 1;

  let resetParas = document.querySelectorAll('.resultParas p');
  for (let i = 0 ; i < resetParas.length ; i++) {
    resetParas[i].textContent = '';
  }

  resetButton.parentNode.removeChild(resetButton);

  guessField1.disabled = false;
  guessSubmit.disabled = false;
  guessField2.disabled = false;
  guessField1.value = '';
  guessField1.focus();
  guessField2.value = '';
  guessField2.focus();

  lastResult1.style.backgroundColor = 'white';
  lastResult2.style.backgroundColor = 'white';


}
