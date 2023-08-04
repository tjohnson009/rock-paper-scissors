//create a startGame function
function newGame() {
    // get input from user of how many rounds to play (max of 9)
    let numOfROunds = () => {
        // parse the input
        let rounds = parseInt(prompt(`How many rounds would you like to play?`)); 
        return rounds; 
    }; 
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

    function getComputerChoice() {
        // create an array of string options for RPS
        let options = ['rock', 'paper', 'scissors']; 
        // get a random number between 0 and 2
        let choice = Math.floor(Math.random() * options.length); 
        //return the item at the index of the choice
        console.log(`Computer chooses ${options[choice]}`); 
        return options[choice]; 
    }

    function playRound() {
        // get Player choice
        // playerChoice = getPlayerChoice(); 
        // get computer choice 
        // computerChoice = getComputerChoice(); 
        // get winner 
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
        getPlayerChoice(); // call the function again to ensure that 
    }; 

    function getRoundWinner(player, computer) {
        let result = ``; 
        if (player === 'rock') {
            console.log('Player chose rock'); 
            return computer === 'rock' ? console.log(`It's a tie`) : computer === 'paper' ? console.log(`Computer wins!`) : console.log(`Player wins`); 
        } else if (player === 'paper') {
            // console.log('paper wins'); 
        } else {
            // console.log('scissors wins'); 
        }; 
    }
    // newGame(); 
    // console.log(getComputerChoice()); 
    // getPlayerChoice(); 
    playRound(); 
