const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
let currentLetter = '';
let score = 0;
const audioCorrect = new Audio('correct.mp3');
const audioWrong = new Audio('wrong.wav');

function getRandomLetter() {
    const randomIndex = Math.floor(Math.random() * letters.length);
    return letters[randomIndex];
}

function displayNewLetter() {
    currentLetter = getRandomLetter();
    const letterElement = document.getElementById('letter');
    letterElement.innerText = currentLetter;
    letterElement.classList.add('animate');
    setTimeout(() => letterElement.classList.remove('animate'), 500);
    document.getElementById('input').value = '';
    document.getElementById('feedback').innerText = '';
    document.getElementById('checkButton').classList.add('bounce');
}

function checkAnswer() {
    const userInput = document.getElementById('input').value.toUpperCase();
    const feedbackElement = document.getElementById('feedback');
    const scoreElement = document.getElementById('score');
    const checkButton = document.getElementById('checkButton');
    
    if (userInput === currentLetter) {
        feedbackElement.innerText = 'Correct!';
        feedbackElement.style.color = 'green';
        audioCorrect.play();
        score++;
    } else {
        feedbackElement.innerText = 'Try again!';
        feedbackElement.style.color = 'red';
        audioWrong.play();
        if (score > 0) score--;
    }
    scoreElement.innerText = 'Score: ' + score;
    checkButton.classList.remove('bounce');
    displayNewLetter();
}

document.addEventListener('DOMContentLoaded', (event) => {
    displayNewLetter();
});
