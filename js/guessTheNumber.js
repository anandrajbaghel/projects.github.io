'use strict';

let score = 20;
let highscore = 0;
let scrt = Math.trunc(Math.random() * 20) + 1;

document.querySelector('.score-value').textContent = score;
document.querySelector('.high-score-value').textContent = highscore;

document.querySelector('.check').addEventListener('click', function(){
    const guessedNumber = Number(document.querySelector('.guess').value);


        if(!guessedNumber){
            document.querySelector('.second').textContent = '⁉️ Please enter a number';
        } else if(guessedNumber === scrt){
            document.querySelector('.second').textContent = '🎉 You guessed it right!';
            document.querySelector('.secret').textContent = scrt;
            document.querySelector('.card').style.backgroundColor = '#116D6E';
            if(score > highscore){
                highscore = score;
                document.querySelector('.high-score-value').textContent = highscore;
            }
        } else if(guessedNumber !== scrt){
            if(score>1){
                document.querySelector('.second').textContent = guessedNumber > scrt ? '📈 Too high!' : '📉 Too low!';
                score--;
                document.querySelector('.score-value').textContent = score;
            } else{
                document.querySelector('.second').textContent = '💥 You lost the game!';
                document.querySelector('.score-value').textContent = 0;
            }
        }
})
document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    scrt = Math.trunc(Math.random() * 20) + 1;

    document.querySelector('.second').textContent = 'Guess the Number!';
    document.querySelector('.score-value').textContent = score;
    document.querySelector('.guess').value ='';
    document.querySelector('.secret').textContent = '?';
    document.querySelector('.card').style.backgroundColor = '#191919';
})
