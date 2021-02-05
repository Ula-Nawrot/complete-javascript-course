'use strict';

const poll = {
    question: 'What is your favourite programming language?',
    options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
    // This generates [0, 0, 0, 0]. More in the next section 😃
    answers: new Array(4).fill(0),
    registerNewAnswer () {
        let numberAnswer = Number(prompt('What is your favourite programming language? \n 0: JavaScript \n 1: Python \n 2: Rust \n 3: C++', 'Write option number'));
        console.log(numberAnswer);
        if (numberAnswer === 0 || numberAnswer === 1 || numberAnswer === 2 ||numberAnswer === 3){
            this.answers[numberAnswer]++;
            console.log(this.answers);
        }
    },

}
document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));

