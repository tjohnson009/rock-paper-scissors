function game() { 
    let result = ``; 
    let playerTotalScore = 0; 
    let compTotalScore = 0;  
    let numOfRounds = parseInt(prompt(`How many rounds do you want to play?`)); 
    if (!isNaN(numOfRounds)) {
        for (let i = 0; i < numOfRounds; i++) {
            console.log(`Round ${i+1}... begin!`);
            singleRound(playerDecision = prompt('Choose: Rock, Paper or Scissors'), computerPlay());
            // singleRound(); 
            if (result.includes('You win')) {
                //  playerTotalScore += 1; 
            } else if (result.includes('You lose')) {
            //     // compTotalScore += 1; 
            } else {
                console.log(`Round ${i+1} is a tie. Both the computer and the player chose ${playerDecision}. No points awarded this round.`);
                singleRound(playerDecision = prompt('Choose: Rock, Paper or Scissors'), computerPlay()); 
            }
            console.log(`The current score is Player: ${playerTotalScore}, Computer: ${compTotalScore}. ${numOfRounds - (i+1)} rounds left!`);
        }
    } else {
        alert(`Your selection of ${numOfRounds} is not valid. Please try again.`);
        game(); 
    }
    // var singleRound = function() {
    function singleRound(playerDecision, computerDecision) {
        // let result;
        if (playerDecision.toLowerCase() === 'rock') {
            switch (computerDecision) {
                case 'paper': result = `You lose, ${computerDecision.toLowerCase()} beats ${playerDecision}. The Computer earned one point!`;
                    console.log(result); 
                    compTotalScore += 1; 
                    break;
                case 'scissors': result = `You win, ${playerDecision} beats ${computerDecision.toLowerCase()}. You earned one point!`;
                    console.log(result); 
                    playerTotalScore += 1; 
                    break;
                default: result = `Choose again, ${computerDecision.toLowerCase()} matches ${playerDecision}.`;
                    console.log(result); 
                    forceWinner(); 
                    break;
            }
            return result;
        } else if (playerDecision.toLowerCase() === 'paper') {
            switch (computerDecision) {
                case 'rock': result = `You win, ${playerDecision} beats ${computerDecision.toLowerCase()}. You earned one point!`;
                    console.log(result); 
                    playerTotalScore += 1; 
                    break;
                case 'scissors': result = `You lose, ${computerDecision.toLowerCase()} beats ${playerDecision}. The Computer earned one point!`;
                    console.log(result); 
                    compTotalScore += 1; 
                    break;
                default: result = `Choose again, ${computerDecision.toLowerCase()} matches ${playerDecision}.`;
                    console.log(result); 
                    forceWinner(); 
                    break;
            }
            return result;
        } else if (playerDecision.toLowerCase() === 'scissors') {
            switch (computerDecision) {
                case 'paper': result = `You win, ${playerDecision} beats ${computerDecision.toLowerCase()}. You earned one point!`;
                    console.log(result); 
                    playerTotalScore += 1; 
                    break;
                case 'rock': result = `You lose, ${computerDecision.toLowerCase()} beats ${playerDecision}. The Computer earned one point!`;
                    console.log(result); 
                    compTotalScore += 1; 
                    break;
                default: result = `Choose again, ${computerDecision.toLowerCase()} matches ${playerDecision}.`;
                    console.log(result); 
                    forceWinner(); 
                    break;
            };
            return result;
        } else {
            alert(`Your selection of ${playerDecision} is not valid. Please try again.`);
            forceWinner(); 
            // singleRound(playerDecision = prompt('Choose: Rock, Paper or Scissors'), computerPlay());
            // singleRound(), computerPlay(); 
        }
        
        function forceWinner() {
            console.log(`A winner must be determined! We will keep playing until there is a winner for this round...`);
            // singleRound(playerDecision = prompt('Choose: Rock, Paper or Scissors'), computerPlay()); 
            if (playerDecision.toLowerCase() === computerDecision.toLowerCase()) {
                console.log(`We will keep playing until there is a winner for this round...`); 
                singleRound(playerDecision = prompt('Choose: Rock, Paper or Scissors'), computerPlay()); 
            }
        }; 

    };
    
    function determineWinner(playerTotalScore, compTotalScore) {
        let winner;
        (playerTotalScore > compTotalScore) ? winner = `The Player!` : (playerTotalScore === compTotalScore) ? winner = `It's a tie with each having a score of ${playerTotalScore}.` : winner = `The Computer!`; 
        console.log(`${winner}`); 
    };

    console.log(`After ${numOfRounds} rounds, the winner is...`);
    determineWinner(playerTotalScore, compTotalScore); 
    return singleRound(); 
    
    
};

function computerPlay() {
    let choices = ['rock','paper', 'scissors']; 
    let random = Math.floor(Math.random() * (choices.length)); // a number between 0 and 2
    let decision = choices[random]; 
    console.log(`The computer chose ${decision}.`); 
    return decision; 
}; 

let play = game(); 
play();  