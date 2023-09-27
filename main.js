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

// Declaring img changers
let rockImg = document.getElementById('rockImg');
let paperImg = document.getElementById('paperImg');
let scissorsImg = document.getElementById('scissorsImg');


// function to change choices

function choiceChange() 
{
    switch (computerSelection) 
    {
        case 'rock' :
            document.getElementById('computerImg').src="./imgs/rock2.png";
            break
        case 'paper' :
            document.getElementById('computerImg').src="./imgs/paper2.png";
            break;
        case 'scissors' :
            document.getElementById('computerImg').src="./imgs/scissors2.png";
            break;
            default:
                break;
    }
}

// Function to play rounds
function gamePlay() {
    computerSelection = getComputerChoice();
    choiceChange();
    console.log(playRound(playerSelection, computerSelection));
}

// Player choice handling
function rock() {
    playerSelection = 'rock';
    document.getElementById('playerImg').src="./imgs/rock1.png"
    gamePlay();
}
function paper() {
    playerSelection = 'paper';
    document.getElementById('playerImg').src="./imgs/paper1.png"
    gamePlay();
}
function scissors() {
    playerSelection = 'scissors';
    document.getElementById('playerImg').src="./imgs/scissors1.png"
    gamePlay();
}