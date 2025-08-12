function getComputerChoice() {
    const choice= ['Rock','Paper','Scissors'];
    return choice[Math.floor(Math.random()*3)].toLowerCase();
}

// Play logic
function playRound(playerselection, computerselection) {
    if(playerselection === computerselection){
        return "Tie";
    }

    if(
        (playerselection === "rock" && computerselection === "scissors") ||
        (playerselection === "paper" && computerselection === "rock") ||
        (playerselection === "scissors" && computerselection === "paper")
    ){
        return 'Player';
    }else{
        return 'Computer';
    }
}

//Play
function game() {
    
    // assigning player choice with eventlisteners
    let btnrock = document.getElementById("rock");
    let btnpaper = document.getElementById("paper");
    let btnscissor = document.getElementById("scissors");
    let finalresultEl = document.getElementsByClassName("finalresult")[0];
    let round = 0;
    let computerScore = 0, playerScore = 0;

    function handlechoice(choice) {
        if (round>=5){    
            return;
        }
        let playerchoice;
        let computerchoice = getComputerChoice();

        playerchoice = choice.toLowerCase();
        let result = playRound(playerchoice,computerchoice);
        if (result === "Player") {
            playerScore++;
        } else if (result === "Computer") {
            computerScore++;
        }
        finalresultEl.innerText = `\n`+result+`\nRound: ${++round}\nComputer Score: ${computerScore}\nPlayer Score: ${playerScore}`;
        if (round===5){
            checkwinner();
        }
    }

    btnrock.addEventListener("click", () => { 
        handlechoice(btnrock.innerText.toLowerCase())
    });
    
    btnpaper.addEventListener("click",()=> { 
        handlechoice(btnpaper.innerText.toLowerCase())
    });
    
    btnscissor.addEventListener("click",()=> { 
        handlechoice(btnscissor.innerText.toLowerCase())
    });

    function checkwinner(){
        if(playerScore>computerScore){
                finalresultEl.innerText = `\nPlayer wins... Now reload the page`
        }else if(computerScore > playerScore){
            finalresultEl.innerText = `\nComputer wins... Now reload the page`
        }else{
            finalresultEl.innerText = "\nTie.... Now reload the page"
        }
    }
}

game();
