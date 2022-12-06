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

console.log(getComputerChoice());