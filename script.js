console.log("Type game(); to start playing rock paper scissors:");

function getComputerChoice(){

    let computer = ['rock','paper','scissors'];
        return computer[Math.floor(Math.random() * computer.length)];
}

function getPlayerChoice(){
    let player = prompt("Please enter choice, Rock, Paper or Scissors: ");

    player = player.toLowerCase();
    if (player != null && player == "rock" || player == "paper" || player == "scissors"){
        return player.toLowerCase();
    }
    else{
        player = prompt("Please enter choice, Rock, Paper or Scissors: ");
    }
        
}

function playRound(playerSelection, computerSelection){

    let result;
    console.log(`Player Choice is: ${playerSelection}`);
    console.log(`Computer Choice is: ${computerSelection}`);

    if (playerSelection == "rock" && computerSelection == "scissors" 
    || playerSelection == "paper" && computerSelection == "rock"
    || playerSelection == "scissors" && computerSelection == "paper"){
        result = "Win";
    }
    else if (playerSelection == computerSelection){
        result = "Draw";
    }
    else if (computerSelection == "rock" && playerSelection == "scissors"
    || computerSelection == "paper" && playerSelection == "rock"
    || computerSelection == "scissors" && playerSelection == "paper"){
        result = "Lose";
    }
    return result;
}


function game() {
    let playerScore = 0;
    let computerScore = 0;
    let tieScore = 0;
    let rounds = 5;
    let gameResult;
    let roundResult;
    let gameText;

for (let i = 0; i < rounds; i++){
    roundResult = playRound(getPlayerChoice(), getComputerChoice());

    if (roundResult == "Win"){
        playerScore++;
        console.log("You win the round!!!");
    }
    else if (roundResult == "Lose"){
        computerScore++;
        console.log("You Lose this round.");
    }
    else if (roundResult == "Draw"){ 
        tieScore++;
        console.log("It is a tie :|");
    }
}
    if (computerScore > playerScore){
        gameResult = "YOU LOSE THE GAME!";
    }
    else if (playerScore > computerScore){
        gameResult = "YOU WIN THE GAME!";
    }
    else
        gameResult = "GAME IS TIED";


gameText = `FINAL RESULT
    ------------------------------
    Wins: ${playerScore}
    Loses: ${computerScore}
    Ties: ${tieScore}
    ${gameResult}`;

    return console.log(gameText);
}