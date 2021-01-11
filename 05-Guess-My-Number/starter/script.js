'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 50;
// console.log(document.querySelector('.guess').value = 23);
const secretNumber = Math.trunc(Math.random()*20+1);
let score = 20;


document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    // Where there is no input
    if(!guess){
        document.querySelector('.message').textContent = 'No number!';
        // when guess is correct/ when palyer wins
    } else if (secretNumber === guess) {
        document.querySelector('.message').textContent = 'Correct Number';
        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem'
        //When guess is to high
    } else if (secretNumber < guess) {
        if(score > 1){document.querySelector('.message').textContent = 'Too high';
        score--;
        document.querySelector('.score').textContent = score;
        }else {
            document.querySelector('.message').textContent = 'You lost the game';
        }
        // When guess is to low
    } else if (secretNumber > guess){
        if(score > 1){
            document.querySelector('.message').textContent = 'Too low';
        score--;
        document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You lost the game';
        }
        
    }
})

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

