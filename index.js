//create a startGame function
function game() {
    let playerScore = 0;
    let computerScore = 0;

    // get input from user of how many rounds to play (max of 9)
    let rounds = getNumOfRounds(); // returns a number

    // loop through playROund f(x) for the number of rounds
    for (let i = 0; i < rounds; i++) { 
        // announce the round #
        console.log(`Now starting Round ${i+1}.`); 

        // plays one whole round of rock paper scissors
       let result = playRound(rounds); // returns string at the moment

        //updates the score
       updateScore(result, playerScore, computerScore); // perhaps update score from within the round function?
    }
    // announce winner of the whole game based on point values check
    if (playerScore === rounds || computerScore === rounds) {
        return playerScore === 9 ? 'Player' : `Computer` + ` is the winner!`; 
    }
}
// prompt user to play again?
function playAgain() {
    
}

function getNumOfRounds() {
    // parse the input
    let rounds = parseInt(prompt(`How many rounds would you like to play?`)); 
    // check if input is a number
    if (isNaN(rounds)) {
        console.info(`Please enter a number.`); 
        return getNumOfRounds(); // added return statement to not load the call stack and avoid having erroneous logs to the console with NaN
    };
    // set max number of rounds to 9
    if (rounds > 9) {
        console.info(`Max number of rounds is 9. Setting number of rounds to 9.`); 
        rounds = 9; 
    };       
    // Min rounds set to 3
    if (rounds < 3) {
        console.info(`Minimum number of rounds is 3. Setting number of rounds to 3.`);
        rounds = 3; 
    }; 
    // if rounds is even, increment by 1 to force a winner
    if (rounds % 2 == 0 && rounds < 9 && rounds > 3) {
        rounds = rounds + 1; 
        console.log(`Added one round to force a winner.`)
    }
    console.log(`Starting game of ${rounds} rounds.`); 
    return rounds; 
}; 

function updateScore(roundResult, pScore, cScore) { // (result = string, number, number)
    if (roundResult.includes('Player wins')) {
        pScore++; 
        console.log(`Player: ${pScore} - Computer: ${cScore}`);
        // return pScore, cScore; 
    } else if (roundResult.includes('Computer wins')) {
        cScore++;
        console.log(`Player: ${pScore} - Computer: ${cScore}`); 
        // return pScore, cScore; 
    } else {
        console.log(`No score change.`);
    }
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
    // get computer choice 
    // get winner for console

    // getRoundWinner(getPlayerChoice(), getComputerChoice()); // only console.log option
    let resultString = getRoundWinner(getPlayerChoice(), getComputerChoice()); // return statement in getRoundWinner + console.log option
    if (resultString.includes('tie')) { // result of round is a tie
        // resultString = ''; 
        return forceWinner(rounds); // calls playRound f(x)
    } else {
        console.log(resultString); // log result to the console
        return resultString; 
        }
    }

    function forceWinner(rounds) { // receives the current round # from the game function and plays the round again
        console.log(`We must have a winner...`); 
        // resets round number
        rounds = rounds - 1; 
        //plays round again
        return playRound(rounds); 
    }; 
    
    function getPlayerChoice() { // returns a string
        //prompt user for a choice
        let input = prompt(`Rock, Paper or Scissors?`).toLowerCase(); 
        // set playerChoice or reprompt the user for a valid input - CONSIDER USING A PROPER IF STATEMENT HERE
        return input == 'rock' ? 'rock' : 
        input == 'paper' ? 'paper' :
        input == 'scissors' ? 'scissors' :
        getPlayerChoice(); // call the function again to ensure that selection is valid
    }; 
    
    function getRoundWinner(player, computer) { // returns a string
        // determine winner of the round
        if (player === 'rock') {
            console.log('Player chooses rock.'); 
//CONSOLE.LOG return computer === 'rock' ? console.log(`It's a tie.`) : computer === 'paper' ? console.log(`Computer wins! Paper beats rock.`) : console.log(`Player wins! Rock beats scissors.`); 
            return computer === 'rock' ? `It's a tie.` : computer === 'paper' ? `Computer wins! Paper beats rock.` : `Player wins! Rock beats scissors.`; 
        } else if (player === 'paper') {
            console.log('Player chooses paper.'); 
//log option  return computer === 'rock' ? console.log(`Player wins! Paper beats rock.`) : computer === 'paper' ? console.log(`It's a tie.`) : console.log(`Computer wins. Scissors beats paper.`); 
            return computer === 'rock' ? `Player wins! Paper beats rock.` : computer === 'paper' ? `It's a tie.` : `Computer wins. Scissors beats paper.`; 
        } else { // player must have chosen scissors
            console.log('Player chooses scissors.');
//log option return computer === 'rock' ? console.log(`Computer wins. Rock beats scissors.`) : computer === 'paper' ? console.log(`Player wins! Scissors beats paper.`) : console.log(`It's a tie.`);  
            return computer === 'rock' ? `Computer wins. Rock beats scissors.` : computer === 'paper' ? `Player wins! Scissors beats paper.` : `It's a tie.`;  
        }; 
    }


    // playRound(); // fixed issue with adding nonexistent parameters to this function; line 34 has no params
    game();
