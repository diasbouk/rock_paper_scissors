
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
let computerSelection = getComputerChoice();
let AiScore = document.querySelector('#AiScore').innerHTML;
AiScore = Number(AiScore);
let humanScore = document.querySelector('#humanScore').innerHTML;
humanScore = Number(humanScore);
let playerSelection; //window.prompt("pick your move");
let rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    playerSelection = 'rock';
    playRound();
    console.log(playRound(playerSelection,computerSelection));
})
let paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    playerSelection = 'paper';
    playRound();
    switch (humanWin) {
        case 0:
            AiScore++;
            break;
            case 1:
                humanScore++;
                case 2:
                    break
        default:
            break;
    }
    console.log(playRound(playerSelection,computerSelection));
})
let scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    playerSelection = 'scissors';
    playRound();
    console.log(playRound(playerSelection,computerSelection));
})

let humanWin;

    function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock') {
        if (computerSelection == 'rock') {
            humanWin = 2;
            return 'Tie';
        }
        else if (computerSelection == 'paper') {
            humanWin = 0;
            return 'You lost !';
        }
        else if (computerSelection == 'scissors') {
            humanWin = 1;
            return 'You won !!';
        }
        else return 'Error';
    }
    else if (playerSelection == 'paper') {
        if (computerSelection == 'rock') {
            humanWin = 1;
            return 'You won';
        }
        else if (computerSelection == 'paper') {
            humanWin = 2;
            return 'Tie';
        }
        else if (computerSelection == 'scissors') {
            humanWin = 0;
            return 'You Lost!!';
        }
    }

    else if (playerSelection == 'scissors') {
        if (computerSelection == 'rock') {
            humanWin = 0;
            return 'You lost';
        }
        else if (computerSelection == 'paper') {
            humanWin = 1;
            return 'You won';
        }
        else if (computerSelection == 'scissors') {
            humanWin = 2;
            return 'Tie';
        }
    }
}

console.log(playRound(playerSelection, computerSelection));