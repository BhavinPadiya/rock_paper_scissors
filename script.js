function getComputerChoice() {
    const choice= ['Rock','Paper','Scissors'];
    return choice[Math.floor(Math.random()*3)];
}


// Take player choice
let playerchoice = prompt("Rock, Paper or Scissors? ").toLowerCase();


// Play logic
function playRound(playerselection, computerselection) {
    if(playerselection === computerselection){
        return "It's a tie!";
    }

    if(
        (playerselection === "rock" && computerselection === "scissors") ||
        (playerselection === "paper" && computerselection === "rock") ||
        (playerselection === "scissors" && computerselection === "paper")
    ){
        return `You win! ${playerselection} beats ${computerselection}`;
    }else{
        return `You lose! ${computerselection} beats ${playerselection}`;
    }
}


//Play
const computerchoice = getComputerChoice().toLowerCase();
console.log(playRound(playerchoice, computerchoice));