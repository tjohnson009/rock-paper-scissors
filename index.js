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
        return options[choice]; 
    }

    function playRound(playerChoice, computerChoice) {
        // get Player choice
        playerChoice = prompt(`Rock, Paper or Scissors?`).toLowerCase(); 
        // get computer choice 
        computerChoice = getComputerChoice(); 
        // determine winner
        getRoundWinner(playerChoice, computerChoice); 
        // return winner
        // update score
    }
    function getRoundWinner(player, computer) {
        
    }
    newGame(); 
    // console.log(getComputerChoice()); 
