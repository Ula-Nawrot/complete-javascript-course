'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 50;
// console.log(document.querySelector('.guess').value = 23);
let secretNumber = Math.trunc(Math.random()*20+1);
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}


document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    // Where there is no input
    if(!guess){
        //document.querySelector('.message').textContent = 'No number!';
        displayMessage('No number!');
        // when guess is correct/ when palyer wins
    } else if (secretNumber === guess) {
        //document.querySelector('.message').textContent = 'Correct Number';
        displayMessage('Correct Number !!! You won :)');
        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundImage = "url('bg-win2.png')"; 
        document.querySelector('.number').style.backgroundColor = '#F9F871'

        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        } 
    //When guess is wrong
    // } else if(guess !== secretNumber){
    //     if(score > 1){
    //         //document.querySelector('.message').textContent = guess > secretNumber ? 'Too high' : 'Too low';
    //         displayMessage(guess > secretNumber ? 'Too high.' : 'Too low.');
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //     }else {
    //         //document.querySelector('.message').textContent = 'You lost the game';
    //         displayMessage('You lost the game :(');
    //     }
    // }})
        //When guess is to high
    } else if (guess > secretNumber && guess < 21) {
        if(score > 1){
            displayMessage('Too high!');
            score--;
            document.querySelector('.score').textContent = score;
        }else {
            document.querySelector('.message').textContent = 'You lost the game';
        }
        // When guess is to low
    } else if (guess > secretNumber && guess > 21){
        displayMessage('The number is out of range.');
    }else if (secretNumber > guess){
        if(score > 1){
            document.querySelector('.message').textContent = 'Too low.';
        score--;
        document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You lost the game :(';
            }
    }})
        
    

const el = document.querySelector('.check');
// Get the input field
const input = document.querySelector('.guess');

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    el.click();
  }
});

// Play again
document.querySelector('.again').addEventListener('click', function () {
    secretNumber = Math.trunc(Math.random()*20+1);
    score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    //document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...');
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundImage = "url('guess_number.png')";  
    document.querySelector('.number').style.backgroundColor = '#4ff7b4'
} )