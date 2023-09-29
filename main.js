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
            return 'You lost';
        }
        else if (computerSelection == 'scissors') {
            return 'You won';
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
            return 'You lost';
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


// Handle winner , playerScore and computerScore
let whoWins;
let playerScore = 0;
let computerScore = 0;
function whoWon()
{
    switch (playRound(playerSelection, computerSelection))
    {
        case 'Tie':
            whoWins = 'No One won, Its a tie.';
            document.querySelector('#winScore').style.color = "burlywood";
            break;
        case 'You won' :
            whoWins = 'You won !!';
            playerScore++;
            document.querySelector('#winScore').style.color = "green";
            break;
        case 'You lost' :
            whoWins = 'You lost, computer wins !';
            computerScore++;
            document.querySelector('#winScore').style.color = "red";
            break;
        default :
            break;
    }
    document.querySelector('#playerScore').innerHTML = playerScore;
    document.querySelector('#computerScore').innerHTML = computerScore;
    document.querySelector('#winScore').innerHTML = whoWins;
    console.log(whoWins);
}


// Handle five rounds
// creating new page if player wins
function ifPlayerWins ()
{
document.querySelector('#container').style.display = "none";
document.querySelector('#ifPlayerWins').style.display = 'flex';
}

// creating new page if computer wins
function ifComputerWins ()
{
document.querySelector('#container').style.display = "none";
document.querySelector('#ifComputerWins').style.display = 'flex';
}



// function to change elements based on winner .
function fiveRounds ()
{
    if (playerScore == 5)
    {
        setTimeout(() => {
        ifPlayerWins();
        }, 1000);
    }
    else if (computerScore == 5)
    {
        setTimeout(() => {
            ifComputerWins();
        }, 1000);
    }
}


// Function to play rounds
function gamePlay() {
    computerSelection = getComputerChoice();
    choiceChange();
    whoWon();
    fiveRounds();
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