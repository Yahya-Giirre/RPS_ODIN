function getComputerChoice(){
    let computer = Math.floor(Math.random() * 3);

    if (computer == 1){
        return "rock";
    }
    else if (computer == 2){
        return "paper";
    }
    else (computer == 3)
        return "scissors"
}

function getPlayerChoice(){
    let player = prompt("Please enter choice, Rock, Paper or Scissors: ");

    player = player.toLowerCase();

    if (player != null && player == "rock" || player == "paper" || player == "scissors"){
        return player;
    }
    else
        return null;
}