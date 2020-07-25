function game() { 
    let result; 
    let playerTotalScore = 0; 
    let compTotalScore = 0;  
    let numOfRounds = parseInt(prompt(`How many rounds do you want to play?`)); 
    if (!isNaN(numOfRounds)) {
        for (let i = 0; i < numOfRounds; i++) {
            console.log(`This is Round ${i+1}... begin!`);
            singleRound(playerDecision = prompt('Choose: Rock, Paper or Scissors'), computerPlay());
            // singleRound(); 
            if (result.contains('You win')) {
                 playerTotalScore += 1; 
            } else if (result.contains('You lose')) {
                playerTotalScore -= 1;
                compTotalScore += 1; 
            } else {
                singleRound(playerDecision = prompt('Choose: Rock, Paper or Scissors'), computerPlay()); 
                // singleRound(); 
            }
        }
    } 
    return singleRound(); 
    console.log(`After ${numOfRounds} rounds, the winner is...`);
    console.log("winner!")
}


function singleRound(playerDecision, computerDecision) {
    // let result;
    if (playerDecision.toLowerCase() === 'rock') {
        switch (computerDecision) {
            case 'Paper': result = `You lose, ${computerDecision} beats ${playerDecision}. You lost one point!`;
            break; 
            case 'Scissors': result = `You win, ${playerDecision} beats ${computerDecision}. You earned one point!`;
            break; 
            default: result = `Choose again, ${computerDecision} matches ${playerDecision}. You earned no points...yet!`;
            break; 
        }
    return result; 
    } else if (playerDecision.toLowerCase() === 'paper') {
        switch (computerDecision) {
            case 'Rock': result = `You win, ${playerDecision} beats ${computerDecision}. You earned one point!`;
            break; 
            case 'Scissors': result = `You lose, ${computerDecision} beats ${playerDecision}. You lost one point!`;
            break; 
            default: result = `Choose again, ${computerDecision} matches ${playerDecision}. You earned no points...yet!`;
            break;
        } 
        return result;  
    } else if (playerDecision.toLowerCase() === 'scissors') {
        switch (computerDecision) {
            case 'Paper': result = `You win, ${playerDecision} beats ${computerDecision}. You earned one point!`;
            break; 
            case 'Rock': result = `You lose, ${computerDecision} beats ${playerDecision}. You lost one point!`;
            break; 
            default: result = `Choose again, ${computerDecision} matches ${playerDecision}. You earned no points...yet!`;
            break;  
        };
        return result;  
    } else {
        alert(`Your selection of ${playerDecision} is not valid. Please try again. `); 
        singleRound(playerDecision = prompt('Choose: Rock, Paper or Scissors'), computerPlay()); 
        // singleRound(), computerPlay(); 
    }
    // return 
}

function computerPlay() {
    let choices = ['Rock','Paper', 'Scissors']; 
    let random = Math.floor(Math.random() * (choices.length)); // a number between 0 and 2
    let decision = choices[random]; 
    console.log(decision); 
    return decision; 
}

game(); 