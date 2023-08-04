//create a startGame function
function newGame() {
    // get input from user of how many rounds to play (max of 9)
    const rounds = getNumOfRounds(); 
    // pass parsed input to main game function
    // intialize a startRound or playRound function with parsed input
    
    // get round choice from the user
    // get round choice from the computer (random)
    // determine winner of the round
    // print that to the console
    // check if computer/user has won enough rounds to win the game (checkWin)
    // announce winner of the whole game
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
            getNumOfRounds();
            //return; // do I need this here?
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

    function getComputerChoice() {
        // create an array of string options for RPS
        let options = ['rock', 'paper', 'scissors']; 
        // get a random number between 0 and 2
        let choice = Math.floor(Math.random() * options.length); 
        //return the option at the index of the choice
        console.log(`Computer chooses ${options[choice]}.`); 
        return options[choice]; 
    }

    function playRound() {
        // get Player choice
        // get computer choice 
        // get winner for console
        getRoundWinner(getPlayerChoice(), getComputerChoice()); 
        // update score

    }

    function getPlayerChoice() {
        //intialize return value playerChoice
        let playerChoice; 
        //prompt user for a choice
        let input = prompt(`Rock, Paper or Scissors?`).toLowerCase(); 
        // set playerChoice or reprompt the user for a valid input - PERHAPS USE A PROPER IF STATEMENT HERE
        return input == 'rock' ? playerChoice = 'rock' : 
        input == 'paper' ? playerChoice = 'paper' :
        input == 'scissors' ? playerChoice = 'scissors' :
        getPlayerChoice(); // call the function again to ensure that selection is valid
    }; 

    function getRoundWinner(player, computer) {
        let result = ``; 
        if (player === 'rock') {
            console.log('Player chooses rock.'); 
            return computer === 'rock' ? console.log(`It's a tie.`) : computer === 'paper' ? console.log(`Computer wins! POaper beats rock.`) : console.log(`Player wins! Rock beats scissors.`); 
        } else if (player === 'paper') {
            console.log('Player chooses paper.'); 
            return computer === 'rock' ? console.log(`Player wins! Paper beats rock.`) : computer === 'paper' ? console.log(`It's a tie.`) : console.log(`Computer wins. Scissors beats paper.`); 
        } else { // player must have chosen scissors
            console.log('Player chooses scissors.');
            return computer === 'rock' ? console.log(`Computer wins. Rock beats scissors.`) : computer === 'paper' ? console.log(`Player wins! Scissors beats paper.`) : console.log(`It's a tie.`);  
        }; 
    }

    // playRound(); // fixed issue with adding nonexistent parameters to this function; line 34 has no params
    newGame();
