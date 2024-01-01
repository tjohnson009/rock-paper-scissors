const DOM_ELEMENTS = {
    startButton: document.querySelector('#startButton'), 
    roundsInput: document.querySelector('#numRounds'), 
    roundNumberP: document.querySelector('.roundNumber p'), 
    roundsDiv: document.querySelector('.roundsDivContainer'),
    gameplayDiv: document.querySelector('.gameplay'), 
    newGameButton: document.querySelector('#newGameButton')
        }

//create a newGame function
function newGame() {
    let playerScore = 0;
    let computerScore = 0;
    
// Event Listeners
// get input from user of how many rounds to play (max of 9)
// default to 3 rounds
    let rounds = 3; 

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
        return [playerScore, computerScore]; 
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

function playRound(rounds) { // returns a result string from the round
    // get Player choice
    let playerChoice = ''; 
    let buttons = document.querySelectorAll('.roundChoice'); 
    // get computer choice 

    let resultString = getRoundWinner(getPlayerChoice(), getComputerChoice()); // returns a string which will be used to determine the winner
    if (resultString.includes('tie')) { // result of round is a tie
        return forceWinner(rounds); // calls playRound f(x)
    } else {
        console.log(resultString); // log result to the console
        return resultString; // saved to a resault variable in the game function
        }
    }

    function forceWinner(rounds) { // receives the current round # from the game function and plays the round again
        console.log(`We must have a winner...`); 
        // resets round number for proper tracking
        rounds = rounds - 1; 
        //plays round again
        return playRound(rounds); 
    }; 
    
    function getPlayerChoice() { // returns a string of the users choice
        //prompt user for a choice
        // let input = prompt(`Rock, Paper or Scissors?`).toLowerCase(); 

        // set playerChoice or reprompt the user for a valid input
        return input == 'rock' ? 'rock' : 
        input == 'paper' ? 'paper' :
        input == 'scissors' ? 'scissors' :
        getPlayerChoice(); // call the function again to ensure that selection is valid
    }; 
    
    function getRoundWinner(player, computer) { // returns a string
        // determine winner of the round
        if (player === 'rock') {
            console.log('Player chooses rock.'); 
            return computer === 'rock' ? `It's a tie.` : computer === 'paper' ? `Computer wins! Paper beats rock.` : `Player wins! Rock beats scissors.`; 
        } else if (player === 'paper') {
            console.log('Player chooses paper.'); 
            return computer === 'rock' ? `Player wins! Paper beats rock.` : computer === 'paper' ? `It's a tie.` : `Computer wins. Scissors beats paper.`; 
        } else { // player must have chosen scissors by process of elimination
            console.log('Player chooses scissors.');
            return computer === 'rock' ? `Computer wins. Rock beats scissors.` : computer === 'paper' ? `Player wins! Scissors beats paper.` : `It's a tie.`;  
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
        for (let i = 0; i < rounds; i++) { 
            // get the round # and display on UI
            DOM_ELEMENTS.roundNumberP.innerText = `Round ${i+1} of ${rounds}`; 
    
            // plays one whole round of rock paper scissors
           let result = playRound(rounds); // returns string whiich will be used to determine winner and update scores
    
            //updates the score AND returns the values of the scores
           [playerScore, computerScore] = updateScore(result, playerScore, computerScore); //crucial step of destructuring the values of the scores in order to update the score values
        }
    }
    
    newGame();