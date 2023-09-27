// Rock Paper Scissors Script


// Function to generate computer selection
    let getComputerChoice = function() {
    let randomNumber = Math.floor(Math.random() * 3);
    switch(randomNumber){
        case 0 :
            return 'rock';
        case 1 :
            return 'paper';
        case 2 :
            return 'scissors';
            default :
            break;
    }
}
// Declaring playerSelection and computerSelection
let computerSelection;
let playerSelection; //window.prompt("pick your move");

// function to play a round
    function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock') {
        if (computerSelection == 'rock') {
            return 'Tie';
        }
        else if (computerSelection == 'paper') {
            return 'You lost !';
        }
        else if (computerSelection == 'scissors') {
            return 'You won !!';
        }
        else return 'Error';
    }
    else if (playerSelection == 'paper') {
        if (computerSelection == 'rock') {
            return 'You won';
        }
        else if (computerSelection == 'paper') {
            return 'Tie';
        }
        else if (computerSelection == 'scissors') {
            return 'You Lost!!';
        }
    }

    else if (playerSelection == 'scissors') {
        if (computerSelection == 'rock') {
            return 'You lost';
        }
        else if (computerSelection == 'paper') {
            return 'You won';
        }
        else if (computerSelection == 'scissors') {
            return 'Tie';
        }
    }
}

console.log(playRound(playerSelection, computerSelection));

// Function to play rounds
function gamePlay() {
    computerSelection = getComputerChoice();
}