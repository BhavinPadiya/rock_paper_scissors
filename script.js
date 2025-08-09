function getComputerChoice() {
    const choice= ['Rock','Paper','Scissors'];
    return choice[Math.floor(Math.random()*3)].toLowerCase();
}

// Play logic
function playRound(playerselection, computerselection) {
    if(playerselection === computerselection){
        return "tie";
    }

    if(
        (playerselection === "rock" && computerselection === "scissors") ||
        (playerselection === "paper" && computerselection === "rock") ||
        (playerselection === "scissors" && computerselection === "paper")
    ){
        return 'player';
    }else{
        return 'computer';
    }
}


//Play
function game() {
    let playerscore = 0;
    let computerscore = 0;

    for (let round = 1; round < 6; round++){
        let playerchoice;
        do {
            playerchoice = prompt(`Round ${round}: Rock, Paper or Scissors? `).toLowerCase();
            if (!['rock', 'paper', 'scissors'].includes(playerchoice)) {
                console.log("Invalid choice. Please enter 'Rock', 'Paper', or 'Scissors'.");
            }
        } while (!['rock', 'paper', 'scissors'].includes(playerchoice));

        let computerchoice = getComputerChoice();
        let result = playRound(playerchoice,computerchoice);

        if(result != 'tie'){
            if (result === 'player') {
                playerscore++;
                console.log(`You win this round. ${playerchoice} beats ${computerchoice}. (${result})`);
            } else if(result === 'computer'){
                computerscore++;
                console.log(`You lose this round. ${computerchoice} beats ${playerchoice}. (${result})`);
            }
        }else{
            console.log("It's a tie.")
        }

        console.log(`Player Score: ${playerscore} Computer Score: ${computerscore}\n`);
    }

    if(computerscore > playerscore){
        console.log(`Computer wins the game. Computer Score: ${computerscore} and Player Score: ${playerscore}`);
    } else if(playerscore > computerscore){
        console.log(`Player wins the game. Computer Score: ${computerscore} and Player Score: ${playerscore}`);
    } else{
        console.log(`It's a tie. Computer Score: ${computerscore} and Player Score: ${playerscore}`);
    }
}

game();