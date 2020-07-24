function game() {
    singleRound(); 
}


function singleRound(playerDecision, computerDecision) {
   let result;
    if (playerDecision === 'Rock') {
        switch (computerDecision) {
            case 'Paper': result = `You lose, ${computerDecision} beats ${playerDecision}.`;
            break; 
            case 'Scissors': result = `You win, ${playerDecision} beats ${computerDecision}.`;
            break; 
            default: result = `Choose again, ${computerDecision} matches ${playerDecision}.`;
            break; 
        }
        console.log(result); 
     } else if (playerDecision === 'Paper') {
        switch (computerDecision) {
            case 'Rock': result = `You win, ${playerDecision} beats ${computerDecision}.`;
            break; 
            case 'Scissors': result = `You lose, ${computerDecision} beats ${playerDecision}.`;
            break; 
            default: result = `Choose again, ${computerDecision} matches ${playerDecision}.`;
            break;
        } 
        console.log(result); 
    } else if (playerDecision === 'Scissors') {
        switch (computerDecision) {
            case 'Paper': result = `You win, ${playerDecision} beats ${computerDecision}.`;
            break; 
            case 'Rock': result = `You lose, ${computerDecision} beats ${playerDecision}.`;
            break; 
            default: result = `Choose again, ${computerDecision} matches ${playerDecision}.`;
            break;  
        };
        console.log(result);
    } else {
        alert(`Your selection of ${playerDecision} is not valid. Please try again. `); 
        singleRound(playerDecision = prompt('Choose: Rock, Paper or Scissors'), computerPlay()); 
    }
}
singleRound(playerDecision = prompt('Choose: Rock, Paper or Scissors'), computerPlay()); 

function computerPlay() {
    let choices = ['Rock','Paper', 'Scissors']; 
    let random = Math.floor(Math.random() * (choices.length)); // a number between 0 and 2
    let decision = choices[random]; 
    console.log(decision); 
    return decision; 
}