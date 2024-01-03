const DOM_ELEMENTS = {
    startButton: document.querySelector('#startButton'), 
    roundsInput: document.querySelector('#numRounds'), 
    roundNumberP: document.querySelector('.roundNumber p'), 
    roundsDiv: document.querySelector('.roundsDivContainer'),
    gameplayDiv: document.querySelector('.gameplay'), 
    newGameButton: document.querySelector('#newGameButton'), 
    playerScore: document.querySelector('.playerPoints'), 
    computerScore: document.querySelector('.computerPoints'),
    choices: Array.from(document.querySelectorAll('.roundChoice')), 
    result: document.querySelector('.resultText')
        }; 

let currentRound = 1; 
let rounds = 3; 

//create a newGame function
function newGame() {
    // let playerScore = 0;
    // let computerScore = 0;
    
// Event Listeners
// default to 3 rounds
    // let rounds = 3; 

// listen for number of rounds from user 
DOM_ELEMENTS.roundsInput.addEventListener('change', (e) => { 
        rounds = e.target.value; //updates rounds variable to the value of the rounds input
// sets min number of rounds to 1 and upodates input
        if (rounds < 1) {
            console.info(`Minimum number of rounds is 1. Setting number of rounds to 1.`);
            rounds = 1; 
        }; 
// sets max number of rounds to 9 and updates input
        if (rounds > 9) {
            console.info(`Max number of rounds is 9. Setting number of rounds to 9.`); 
            rounds = 9; 
        };  
        DOM_ELEMENTS.roundsInput.value = rounds; // sets value of input to the rounds variable if changed in above if statements
        rounds = parseInt(DOM_ELEMENTS.roundsInput.value); 
    }); 

//add event listener to the start button - upon click, gameplay starts
    DOM_ELEMENTS.startButton.addEventListener('click', (e) => {
        startPlay(rounds); // closure on rounds variable!! 
    }); 

// add event listener to new game button for new game on click
    DOM_ELEMENTS.newGameButton.addEventListener('click', (e) => {
        newGame(); 
        // toggleGameplayDisplay(); 
    })

// add event listeneres to buttons to fire the playRound function
DOM_ELEMENTS.choices.forEach(el => {
    el.addEventListener('click', playRound)
})

    // announce winner of the whole game based on point values check
    // if (playerScore > computerScore) {
    //     console.log(`Player is the winner with a final score of ${playerScore} wins out of ${rounds} rounds!`);  
    // } else if (computerScore > playerScore) {
    //     console.log(`Computer is the winner with a final score of ${computerScore} wins out of ${rounds} rounds!`)
    // } 
}

function updateScore(roundResult, playerScore, computerScore) { // (result = string, number, number)
    if (roundResult.includes('Player wins')) {
        playerScore++; 
        console.log(`Player: ${playerScore} - Computer: ${computerScore}`);
        return [playerScore, computerScore]; 
    } else if (roundResult.includes('Computer wins')) {
        computerScore++;
        console.log(`Player: ${playerScore} - Computer: ${computerScore}`); 
        return [playerScore, computerScore]; // destructuring
    } // no else case because we force a winner
    }; 

function getComputerChoice() {
    // create an array of string options for RPS
    let options = ['rock', 'paper', 'scissors']; 
    // get a random number between 0 and 2
    let choice = Math.floor(Math.random() * options.length); 
    //return the option at the index of the choice
    console.log(`Computer chooses ${options[choice]}.`); 
    return options[choice]; 
    }




function playRound(event) { 
    // takes in the event when the 3 choices are clicked
    // get Player choice
    // get computer choice  
    let resultString = getRoundWinner(event.target.value, getComputerChoice()); // returns a string which will be used to determine the winner
    if (resultString.includes('tie')) { // result of round is a tie
        // return forceWinner(); // calls playRound f(x)
        // Tie handling
         console.log(resultString); 
        //  updateUI(resultString); 
        // player wins handling
    } else if (resultString.includes('Player')) {
        console.log(resultString); 
        currentRound++; 
        updateUI(resultString); // saved to a result variable in the game function
        // computer wins handling
    } else if (resultString.includes('Computer')) {
        console.log(resultString); 
        currentRound++; 
        updateUI(resultString); 
    }

    if (currentRound > rounds) {
        // console.log('last round'); 
        DOM_ELEMENTS.choices.forEach(el => {
            el.removeEventListener('click', playRound); 
        })
    }
    }

    function showResult(winner) { // updates UI to show result of the previous round
        if (currentRound > rounds) {
            if (parseInt(DOM_ELEMENTS.playerScore.innerHTML) > parseInt(DOM_ELEMENTS.computerScore.innerHTML)) {
                DOM_ELEMENTS.result.innerHTML = `Player wins with a score of ${DOM_ELEMENTS.playerScore.innerHTML} to ${DOM_ELEMENTS.computerScore.innerHTML}`;
            } else {
                DOM_ELEMENTS.result.innerHTML = `Computer wins with a score of ${DOM_ELEMENTS.computerScore.innerHTML} to ${DOM_ELEMENTS.playerScore.innerHTML}`;
            }
        } else {
            DOM_ELEMENTS.result.innerHTML = `${winner} wins Round ${currentRound - 1}`; 
        }
    }

    function updateUI(result) {
        // getRound(currentRound); 
        // console.log(currentRound); 
        //player wins
        if (result.includes('Player')) {
            DOM_ELEMENTS.playerScore.innerHTML = parseInt(DOM_ELEMENTS.playerScore.innerHTML) + 1; 
            DOM_ELEMENTS.roundNumberP.innerHTML = `Round ${currentRound} of ${rounds}`; 
            showResult('Player'); // show previous round result before round number is updated
        //computer wins
        } else if (result.includes('Computer')) {
            DOM_ELEMENTS.computerScore.innerHTML = parseInt(DOM_ELEMENTS.computerScore.innerHTML) + 1;
            DOM_ELEMENTS.roundNumberP.innerHTML = `Round ${currentRound} of ${rounds}`; 
            showResult('Computer'); 
        } else {

        }
        // announces last round on the UI
        if (currentRound === rounds || currentRound > rounds) {
            DOM_ELEMENTS.roundNumberP.innerHTML = `Last round!`; 
        }
    }



    function forceWinner(roundNumber) { // receives the current round # from the game function and plays the round again
        console.log(`We must have a winner...`); 
        // resets round number for proper tracking
        roundNumber = roundNumber - 1; 
        //plays round again
        return playRound(roundNumber); 
    }; 
    
    function getPlayerChoice() { // returns a string of the users choice
        // display "choose" prompt on UI
        //prompt user for a choice
        // wait for user to click a button
        // let input = 'rock'; 

        // set playerChoice or reprompt the user for a valid input
        //  input == 'rock' ? 'rock' : 
        // input == 'paper' ? 'paper' :
        // input == 'scissors' ? 'scissors' :
        // getPlayerChoice(); // call the function again to ensure that selection is valid

        // setTimeout(() => {
        //     console.log('Waiting for player response...'); 
        // }, 5000); 
    }; 
    
    function getRoundWinner(playerChoice, computerChoice) { // returns a string
        // determine winner of the round
        if (playerChoice === 'rock') {
            console.log('Player chooses rock.'); 
            return computerChoice === 'rock' ? `It's a tie.` : computerChoice === 'paper' ? `Computer wins! Paper beats rock.` : `Player wins! Rock beats scissors.`; 
        } else if (playerChoice === 'paper') {
            console.log('Player chooses paper.'); 
            return computerChoice === 'rock' ? `Player wins! Paper beats rock.` : computerChoice === 'paper' ? `It's a tie.` : `Computer wins. Scissors beats paper.`; 
        } else if (playerChoice === 'scissors') { 
            console.log('Player chooses scissors.');
            return computerChoice === 'rock' ? `Computer wins. Rock beats scissors.` : computerChoice === 'paper' ? `Player wins! Scissors beats paper.` : `It's a tie.`;  
        }; 
    }

    function toggleGameplayDisplay() {
        // hide the rounds container on click
        DOM_ELEMENTS.roundsDiv.classList.toggle('hidden'); 
        // display the gameplay container 
        DOM_ELEMENTS.gameplayDiv.classList.toggle('hidden'); 
        // console.log(`${rounds} rounds`); 
    }

    function startPlay(rounds) {
        // if rounds is even, increment by 1 to force a winner
        if (rounds % 2 == 0 && rounds < 9 && rounds > 1) {
            console.log(rounds); 
            rounds++; 
            console.log(`Added one round to force a winner.`); 
        }
        toggleGameplayDisplay(); 
        // for (let i = 0; i < rounds; i++) { 
            // get the round # and display on UI
            DOM_ELEMENTS.roundNumberP.innerText = `Round ${currentRound} of ${rounds}`; 
    
        // return function getRound(currentRound) {
        //      console.log(currentRound); 
        //     return currentRound; 
        // }
            // plays one whole round of rock paper scissors
        //    let result = playRound(roundNumber = i+1); // returns string whiich will be used to determine winner and update scores
    
            //updates the score AND returns the values of the scores
        //    [playerScore, computerScore] = updateScore(result, playerScore, computerScore); //crucial step of destructuring the values of the scores in order to update the score values
        // }
    }
    
    newGame();