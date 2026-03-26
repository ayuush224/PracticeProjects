let randomNumber = Math.round((Math.random() * 100) + 1);

const submit = document.querySelector('.guessSubmit');
const userInput = document.querySelector('.guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p');
let prevGuess = [];
let numGuess = 0;

let playGame = true;

if(playGame){
    submit.addEventListener('click', (e) => {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    });
};

function validateGuess(guess){
    if(isNaN(guess) || guess < 1 || guess > 100){
        displayMessage("Please Enter a Valid Number");
    }
    else{
        prevGuess.push(guess);
        displayGuess(guess);
        
        if(numGuess == 10){
            displayMessage(`Game over Random Number was ${randomNumber}`);
            endGame();
        }
        else{
            checkGuess(guess);
        }
    }
};

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`You Guessed it right`);
        endGame();
    }
    else if(guess < randomNumber){
        displayMessage(`Number is TOO Low`);
    }
    else{
        displayMessage(`Number is TOO High`);
    }
};

function displayGuess(guess){
    userInput.value = '';
    guessSlot.appendChild(document.createTextNode(`${guess} |`));
    numGuess++;
    remaining.textContent = `${10 - numGuess}`;
};

function displayMessage(message){
    const node = document.createElement('h2');
    node.appendChild(document.createTextNode(message));
    lowOrHigh.textContent = message;

};

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled', 'true');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
};

function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', (e) => {
        randomNumber = Math.round((Math.random() * 100) + 1);
        prevGuess = [];
        numGuess = 0;
        guessSlot.innerHTML = '';
        remaining.textContent = `${10 - numGuess}`;
        userInput.removeAttribute('disabled', 'false');
        playGame = true;
        startOver.removeChild(p);
    }, false);
};