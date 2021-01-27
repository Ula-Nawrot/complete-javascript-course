'use strict';
//Selecting elements
const palyer0El = document.querySelector('.player--0');
const palyer1El = document.querySelector('.player--1')
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0,  0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

const switchPlayer = function(){
    document.getElementById(`current--${activePlayer}`).textContent = 0;
            activePlayer = activePlayer === 0 ? 1 : 0;
            currentScore = 0;
            palyer0El.classList.toggle('player--active');
            palyer1El.classList.toggle('player--active');
}
//Rolling dice functionality
btnRoll.addEventListener('click', function () {
    if(playing) {
        //1. Generating a random dice roll
        const dice = Math.trunc(Math.random() * 6) + 1;
    //2. Display dice
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;
    //3. Check rolled 1: if true, switch to next player
        if(dice !== 1){
            //Add dice to current score
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;

        }else{
            //switch to the next player
            switchPlayer();
        }
    }
})

btnHold.addEventListener('click', function(){
    if(playing) {
        
    // 1. Add current score to active players score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    // 2. Check if player's score is >=100
    
    if(scores[activePlayer] >= 20) {
        //   Finish the game
        
        playing = false;
        diceEl.classList.add('hidden');
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    }else {
        // 3. Switch to the next player
        switchPlayer(); 
    }
    }

        
})

//Play again
btnNew.addEventListener('click', function () {
    score0El === 0;
    score1El === 0;
    current0El === 0;
    current1El === 0;
})